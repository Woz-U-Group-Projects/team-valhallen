// Necessary Imports
import React from 'react';

// Routing Imports
import { Link, withRouter } from 'react-router-dom';

// Styling Imports
import '../Styling.css'

// JSX Rendering
class Navbar extends React.Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                        Sign Up
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/tenantHome" className="nav-link">
                        Tenant
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </Link>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="nav-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                            Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }

}

export default withRouter(Navbar);