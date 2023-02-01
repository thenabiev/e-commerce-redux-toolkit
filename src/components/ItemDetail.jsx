import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HiChevronLeft, HiOutlineShoppingCart } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { items } from '../data/items';
import CheckOut from './CheckOut';
import { add } from './State/Slice/СartSlice';


export const ItemDetail = () => {
    const {itemId}=useParams();
    const item=items.find(x=>x.id==itemId);
    const {isOpen}=useSelector((state)=>state.checkout);
    const {lang}=useSelector((state)=>state.lang);
    const dispatch=useDispatch();
    

  return (
    
    <Container className='detail mb-5'>
        <br /><br />
        <Row xs={1} md={2}>
            <Col className='d-flex align-items-center justify-content-center border rounded '>
                <div className="imgBox rounded">
                    <img src={item.image}/>
                </div>
                
            </Col>
            <Col className=''>
                <br />
                <h3>{item.name}</h3>
                <br />
                <p className='d-inline border-bottom pb-2'
                >{lang ? "Qiymət : " : "Price : "}<strong>{item.price}</strong> AZN</p>
                
                <p className='my-3'>{item.detail}</p>
                <div className="d-flex align-items-center justify-content-start ">
                    
                        <Link 
                        to='/'
                        className='routerLink w-25'>
                            <Button className='w-100' variant='outline-dark'>
                                {lang ? "Geri": "Back"}
                            </Button>
                        </Link>
                    
                    <Button 
                    onClick={()=>dispatch(add(item))}

                    className='mx-2 w-25' variant='dark'>
                        <HiOutlineShoppingCart size='1.5rem'/>
                    </Button>
                </div>
            </Col>
        </Row>

        <CheckOut isOpen={isOpen}/>
    </Container>
  )
}
