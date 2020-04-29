// Necessary Imports
import React from 'react';

// Component Imports
import Header from '../components/header';
import UserManagement from '../components/UserManagement';

// JSX Rendering
const UserPage = () => (

  <div className="UserPage">

    <Header title="Users Page" />

    <UserManagement />
      
  </div>
    
)

export default UserPage;