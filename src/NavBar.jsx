import React, { Component } from 'react';

//should be a function I think?

class NavBar extends Component {
    

    render() {
        let totalUsers = this.props.userCount;

        return (
            <nav className="navbar">
                <a href="/" className="navbar-brand">Chatty</a>
                <div className="navbar-users"> {totalUsers} online users </div>
            </nav>
        )
    }
}

export default NavBar