// REACT
import React from 'react';
// ICONS
import {AiOutlineQuestionCircle, AiOutlineShopping} from "react-icons/ai";
// BOOTSTRAP
import { Card, Col, Row, Button } from 'react-bootstrap';
// REDUX
import { add } from './State/Slice/СartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const CardComponent = ({item}) => {
    const dispatch=useDispatch();
    const {id, image, price, name}=item;
    
  return (
    <Col >
        <Card className='card-component'>
         <Card.Body>
            <Card.Img src={image}/>
            <Card.Title className='d-flex justify-content-between align-items-center'>
                {name}
                <Link to={`/detail/${id}`}>
                    <AiOutlineQuestionCircle className='text-dark' />
                </Link>
            </Card.Title>
            <p>{price} AZN</p>

            <Row >
                <Button 
                onClick={()=>dispatch(add(item))}
                variant="dark">
                    <AiOutlineShopping 
                    size='1.5rem' 
                    className='icon'/>
                </Button>
            </Row>
         </Card.Body>
         
        </Card>
    </Col>
  )
}

export default CardComponent
