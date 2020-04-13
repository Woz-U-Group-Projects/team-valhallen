import React from 'react';

const Header = ({ title }) => (
    <div>
        <a href="/login">Login</a>
        <a href="/manager">Manager Home</a>
        <a href="/users">Users Page</a>
        <a href="/config">Configuration Page</a>
        <a href="/tenant">Tenant Home</a>
        <a href="/tech">Technician Home</a>
        <hr></hr>
        <h1>{title}</h1>
        <hr></hr>
    </div>
);

export default Header;