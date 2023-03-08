import React from 'react'
import { Container } from 'react-bootstrap'

const ItemListContainer = ({ greeting }) => {
    return (
        <Container className='pt-2'>
            <span>{greeting}</span>
        </Container>
    );
};

export default ItemListContainer;