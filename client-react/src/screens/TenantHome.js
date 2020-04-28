import React from 'react';

import { Container } from 'react-bootstrap';

import TenantDetails from '../components/TenantDetails';

const TenantHome = (props) => (
    <div>
    <Container>
    <TenantDetails />
    </Container>
    </div>
);

export default TenantHome;