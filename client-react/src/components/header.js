
import React from 'react';

const Header = ({ title }) => (
    
    <div>
        <a href="/manager">Manager Home</a>
        <a href="/users">Users Page</a>
        <a href="/config">Configuration Page</a>
        <hr></hr>
        <h1>{title}</h1>
        <hr></hr>
    </div>
    
);

export default Header;
