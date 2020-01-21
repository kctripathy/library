import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './AppBody.css';
import AppRoutings from '../AppNavigation/AppRoutings';

class AppBody extends Component {
    render() {
        return (
            <Container fluid className="AppBody">
                <h6>body component</h6>
                <AppRoutings />
            </Container>
        );
    }
}

export default AppBody;