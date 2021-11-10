import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import EstablishmentsPage from './pages/establishments-page/establishments-page';
import LoginPage from './pages/login-page/login-page';
import NewUserPage from './pages/new-user/new-user';
import authService from './services/auth.service';
import NavigationBar from './NavigationBar';

// Criando c component 
class App extends React.Component {

    // Criando construtor
    constructor(props) {

        // Executando o construtor da Super Class
        super(props)

        // Definindo o estado inicial
        this.state = {
            userData: null,
            isAuthenticated: false,
        }

    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser(){
        let userData = authService.getLoggedUser();
        if (userData) {
            this.setState({
                userData,
            })
        }
    }

    login = () => {
        this.loadUser();
        this.setState({ isAuthenticated: true });
    }
    
    logout = () => {
        authService.clearLoggerUser()
        window.location.reload()
        this.setState({ isAuthenticated: false });
    }

    // Função que renderiza o componente
    render() {

        const { isAuthenticated } = this.state;

        /* const routes = [
            { route : "/establishments", view : EstablishmentsPage, exact : false},
            { route : "/login", view : LoginPage, exact : false},
        ] */

        return (
           <BrowserRouter>
                {isAuthenticated && <NavigationBar isLoggedIn={isAuthenticated} logout={this.logout} userData={this.userData}/>}
                <Switch>
                    <Route path="/establishments" component={EstablishmentsPage} />
                    <Route path="/newUser" component={props => <NewUserPage {...props} onLogin={() => this.login()}/>} />
                    <Route path="/login" component={props => <LoginPage {...props} onLogin={() => this.login()}/>} />
                    {/* routes.map((item, index) => (
                        <Route key={index} path={item.route} component={item.view} exact={item.exact}/>
                    )) */}
                </Switch>
           </BrowserRouter>
        )
    }

}

export default App;
