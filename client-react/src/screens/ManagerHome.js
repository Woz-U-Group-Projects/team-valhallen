import React from 'react';
import Header from '../components/header';
import ManagerHomeMgmt from '../components/ManagerHomeMgmt';
import UserManagement from '../components/UserManagement';

const ManagerHome = () => {

    return (
        <div>
            <Header title="Manager" />
            <ManagerHomeMgmt />
            <UserManagement />
        </div>
    );

};

export default ManagerHome;