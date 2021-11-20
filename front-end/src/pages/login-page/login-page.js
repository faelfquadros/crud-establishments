import React from 'react'
import authService from '../../services/auth.service';
import { Redirect } from 'react-router-dom';

class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: "",
            password: "",
            redirectsTo: null,
        }
    }

    sendLogin = async (event) => {
        event.preventDefault();
        let data = {
            user: this.state.user,
            password: this.state.password
        }

        try {
            let res = await authService.authenticate(data);
            authService.setLoggedUser(res.data, this.state.user);
            this.setState({redirectsTo : "/establishments"}, () => this.props.onLogin());
        } catch (error) {
            console.log(error)
            alert('Invalid User or Password!')
        }
    }

    sendCreateNewUser = (event) => {
        event.preventDefault();
        this.setState({redirectsTo : "/newUser"});
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
                        <form onSubmit={this.sendLogin}>
                            <div className="form-group">
                                <label htmlFor="user">User</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={e => this.setState({user: e.target.value})}
                                    value={this.state.user}
                                    id="user" 
                                    placeholder="User" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <input 
                                    type="password" 
                                    onChange={e => this.setState({password: e.target.value})}
                                    value={this.state.password}
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Senha"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <button className="btn btn-success" onClick={this.sendCreateNewUser}>New User</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default LoginPage;
