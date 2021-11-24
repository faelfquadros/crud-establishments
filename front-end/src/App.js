import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import EstablishmentsList from './pages/establishments/establishments-list';
import EstablishmentsCreate from './pages/establishments/establishments-create';
import LoginPage from './pages/login-page/login-page';
import NewUserPage from './pages/new-user/new-user';
import authService from './services/auth.service';
import NavigationBar from './NavigationBar';
import { Redirect } from 'react-router-dom';
class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: null,
            isAuthenticated: false,
        }
    }

    componentWillMount() {
        this.loadUser();
    }

    loadUser(){
        let userData = authService.getLoggedUser();
        if (userData) {
            this.setState({
                userData,
                isAuthenticated: true
            })
        }
    }

    login = () => {
        this.loadUser();
        this.setState({ isAuthenticated: true });
    }
    
    logout = () => {
        authService.clearLoggerUser()
        this.setState({ 
            isAuthenticated: false
        });
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
                {!isAuthenticated && <Redirect to={"/login"}/>}
                {isAuthenticated && <NavigationBar isLoggedIn={isAuthenticated} logout={this.logout} userData={this.state.userData}/>}
                <Switch>
                    <Route path="/establishments" component={EstablishmentsList} />
                    <Route path="/newUser" component={props => <NewUserPage {...props} onLogin={() => this.login()}/>} />
                    <Route path="/login" component={props => <LoginPage {...props} onLogin={() => this.login()}/>} />
                    <Route path="/newEstablishment" component={props => <EstablishmentsCreate {...props} />} />
                    {/* routes.map((item, index) => (
                        <Route key={index} path={item.route} component={item.view} exact={item.exact}/>
                    )) */}
                </Switch>
           </BrowserRouter>
        )
    }

}

export default App;
