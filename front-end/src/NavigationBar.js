import React from 'react'
import Header from './components/header/header.component'

class NavigationBar extends React.Component {

  render() {
    console.log(this.props)
    return (
        <Header title="Stablishments Crud" ref={this.myHeader}>
            <span>
                {this.props.userData?.user}
            </span>
            <button className="btn btn-primary" onClick={e => this.props.logout()}>
                Logout
            </button>
        </Header>
    )
  }
}

export default NavigationBar