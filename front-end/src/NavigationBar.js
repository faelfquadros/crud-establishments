import React from 'react'
import Header from './components/header/header.component'

class NavigationBar extends React.Component {

  endSession = () => {
    this.props.logout()
  }

  render() {
    return (
        <Header title="Stablishments Crud" ref={this.myHeader}>
            <span>
                {this.props.userData?.user}
            </span>
            <button className="btn btn-primary" onClick={e => this.endSession()}>
                Logout
            </button>
        </Header>
    )
  }
}

export default NavigationBar