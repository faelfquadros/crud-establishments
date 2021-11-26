import React from 'react'
import { Redirect, Link } from 'react-router-dom';
import authService from '../../services/auth.service';
import establishmentsService from '../../services/establishment.service';

class NewUserPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            street: "",
            number: "",
            city: "",
            state: "",
            country: "",
            cnpj: "",
            redirectsTo: null,
        }
    }

    createNewEstablishment = async (event) => {
        event.preventDefault();
        const userLogged = await this.getLoggedUser();

        const data = {
            name: this.state.name,
            cnpj: this.state.cnpj,
            email: this.state.email,
            phone: this.state.phone,
            street: this.state.street,
            number: this.state.number,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            created_by: userLogged
        }

        try {
            let teste = await establishmentsService.createEstablishments(data);
            console.log(teste)
            this.setState({redirectsTo : "/establishments"});
        } catch (error) {
            console.log('error', error)
            //alert('Invalid User ot Password!')
        }
    }

    getLoggedUser = async () => {
        let loggedUserData = await authService.getLoggedUser();
        return loggedUserData.user;
    }

    goBack = () => {
        this.props.history.push('/establishments');
    }

    render() {
        if(this.state.redirectsTo) {
            return(
                <Redirect to={this.state.redirectsTo}/>
            )
        }
        return (
            <div className="container">
                <Link to={{ pathname: "/establishments" }} className="btn btn-success create-button-establishment">
                    Go Back
                </Link>
                <div className="container d-flex justify-content-center">
                    <div className="card w-50">
                    {/* <button type="submit" className="btn btn-success" onClick={this.goBack}>Go Back</button> */}
                        <div className="card-body">
                            <form onSubmit={this.createNewEstablishment}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        onChange={e => this.setState({name: e.target.value})}
                                        value={this.state.name}
                                        id="name" 
                                        placeholder="Name"
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cnpj">Cnpj</label>
                                    <input 
                                        type="number" 
                                        className="form-control"
                                        onChange={e => this.setState({cnpj: e.target.value})}
                                        value={this.state.cnpj}
                                        id="cnpj" 
                                        placeholder="Cnpj" 
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        onChange={e => this.setState({email: e.target.value})}
                                        value={this.state.email}
                                        id="email" 
                                        placeholder="Email" 
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        onChange={e => this.setState({phone: e.target.value})}
                                        value={this.state.phone}
                                        id="phone" 
                                        placeholder="Phone" 
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="street">Street</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        onChange={e => this.setState({street: e.target.value})}
                                        value={this.state.street}
                                        id="street" 
                                        placeholder="Street" 
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="number">Number</label>
                                    <input 
                                        type="number" 
                                        className="form-control"
                                        onChange={e => this.setState({number: e.target.value})}
                                        value={this.state.number}
                                        id="number" 
                                        placeholder="Number" 
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        onChange={e => this.setState({city: e.target.value})}
                                        value={this.state.city}
                                        id="city" 
                                        placeholder="City" 
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        onChange={e => this.setState({state: e.target.value})}
                                        value={this.state.state}
                                        id="state" 
                                        placeholder="State" 
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        onChange={e => this.setState({country: e.target.value})}
                                        value={this.state.country}
                                        id="country" 
                                        placeholder="Country" 
                                        required />
                                </div>
                                <button type="submit" className="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewUserPage;