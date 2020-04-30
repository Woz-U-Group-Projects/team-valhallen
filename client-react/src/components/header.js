import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling.css'

const Header = ({ title }) => (
    
    <div>
        <Link to="/manager">New Mgr Home</Link>
        <Link to="/manager/users">New User Page</Link>
        <Link to="/manager/config">New Config Page</Link>
        {/* <a href="/manager">Manager Home</a>
        <a href="/users">Users Page</a>
        <a href="/config">Configuration Page</a>
        <hr></hr>
        <h1>{title}</h1>
        <hr></hr> */}
    </div>
    
);

export default Header;
