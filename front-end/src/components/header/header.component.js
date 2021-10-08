import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
    }
    
    insideHeader(){
        console.log("Função no header.")
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" onClick={this.props.onTitleClicked}>
                    {this.props.title}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/establishments" className="nav-link">
                                Establishments
                            </Link>
                        </li>
                    </ul>
                </div>
                {this.props.children}
            </nav>
        )
    }
}

export default Header;