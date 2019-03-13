import React, { Component } from 'react';

//should be a function I think?

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="/" className="navbar-brand">Chatty</a>
            </nav>
        )
    }
}

export default NavBar