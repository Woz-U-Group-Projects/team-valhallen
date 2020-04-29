// Necessary Imports
import React from 'react';

// Component Imports
import TenantDetails from '../components/TenantDetails';

// Styling Imports
import { Container } from 'react-bootstrap';

// JSX Rendering
const TenantHome = (props) => (
    <div>
    <Container>
    <TenantDetails />
    </Container>
    </div>
);

export default TenantHome;
