import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerPage = () => {
    return (
        <div className="text-center" style={{paddingTop: 300, paddingBottom: 300 }}>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="dark" />
        </div>
    );
};

export default SpinnerPage;