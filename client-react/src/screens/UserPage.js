import React from 'react';
import Header from '../components/header';
import UserList from "../components/UserList";

function UserPage() {
    return (
      <div className="UserPage">
        
        <Header title="Users Page" />

        <UserList />
      
      </div>
    );
  }

export default UserPage;