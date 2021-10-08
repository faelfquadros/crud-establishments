import React from 'react'
import { Redirect } from 'react-router-dom';
import authService from '../../services/auth.service';
import userService from '../../services/user.service';

class NewUserPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            user: "",
            password: "",
            redirectsTo: null,
        }
    }

    createNewUser = async (event) => {
        event.preventDefault();
        let data = {
            name: this.state.name,
            user: this.state.user,
            password: this.state.password
        }

        try {
            await userService.createUser(data);
            delete data.name;
            let res = await authService.authenticate(data);
            authService.setLoggedUser(res.data, this.state.user);
            this.setState({redirectsTo : "/establishments"}, () => this.props.onLogin());
        } catch (error) {
            console.log(error)
            alert('Usuário ou senha Inválido!')
        }
    }

    render() {
        if(this.state.redirectsTo) {
            return(
                <Redirect to={this.state.redirectsTo}/>
            )
        }
        return (
            <div className="container d-flex justify-content-center">
                <div className="card mt-5 w-50">
                    <div className="card-body">
                        <form onSubmit={this.createNewUser}>
                            <div className="form-group">
                                <label htmlFor="name">Nome</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={e => this.setState({name: e.target.value})}
                                    value={this.state.name}
                                    id="name" 
                                    placeholder="Usuário"
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user">Usuário</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={e => this.setState({user: e.target.value})}
                                    value={this.state.user}
                                    id="user" 
                                    placeholder="Usuário" 
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <input 
                                    type="password" 
                                    onChange={e => this.setState({password: e.target.value})}
                                    value={this.state.password}
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Senha"
                                    required />
                            </div>
                            <button type="submit" className="btn btn-primary">Criar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewUserPage;
