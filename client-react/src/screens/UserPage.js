import React from 'react';
import Header from '../components/header';
import UserList from "../components/UserList";
//import { connect } from 'react-redux';

function UserPage() {
    return (
      <div className="UserPage">
        
        <Header title="Users Page" />

        <UserList />
      
      </div>
    );
  }

export default UserPage;