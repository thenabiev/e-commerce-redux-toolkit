import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {items} from '../data/items'
import CardComponent from './CardComponent';

const ShoppingContainer = () => {
  return (
    <Container >
        <Row xs={1} md={3} lg={4}   className='g-2 '>
            {
                items.map(item=>(
                    <CardComponent key={item.id} item={item}/>
                ))
            }
        </Row>

    </Container>
  )
}

export default ShoppingContainer
