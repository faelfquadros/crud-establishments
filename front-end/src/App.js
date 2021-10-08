import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/header/header.component'
import EstablishmentsPage from './pages/establishments-page/establishments-page';
import LoginPage from './pages/login-page/login-page';
import NewUserPage from './pages/new-user/new-user';
import authService from './services/auth.service';

// Criando c component 
class App extends React.Component {

    // Criando construtor
    constructor(props) {

        // Executando o construtor da Super Class
        super(props)

        // Definindo o estado inicial
        this.state = {
            userData: null,
        }

    }

    async loadUser() {
        let userData = authService.getLoggedUser()
        console.log(userData)
        this.setState({userData: userData})
    }

    componentDidMount() {
        this.loadUser();
    }

    logout() {
        authService.clearLoggerUser()
        window.location.reload()
    }

    // Função que renderiza o componente
    render() {

        /* const routes = [
            { route : "/establishments", view : EstablishmentsPage, exact : false},
            { route : "/login", view : LoginPage, exact : false},
        ] */

        return (
           <BrowserRouter>
                <Header title="Crud de Estabelecimentos" ref={this.myHeader}>
                    <span>
                        {this.state.userData?.user}
                    </span>
                    <button className="btn btn-primary" onClick={e => this.logout()}>
                        Sair
                    </button>
                </Header>
                <Switch>
                    <Route path="/establishments" component={EstablishmentsPage} />
                    <Route path="/newUser" component={props => <NewUserPage {...props} onLogin={() => this.loadUser()}/>} />
                    <Route path="/login" component={props => <LoginPage {...props} onLogin={() => this.loadUser()}/>} />
                    {/* routes.map((item, index) => (
                        <Route key={index} path={item.route} component={item.view} exact={item.exact}/>
                    )) */}
                </Switch>
           </BrowserRouter>
        )
    }

}

export default App;
