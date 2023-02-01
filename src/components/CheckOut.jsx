import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import { open } from './State/Slice/CheckoutSlice';
import { clear } from './State/Slice/СartSlice';
import {HiChevronLeft, HiTrash} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';

const CheckOut = ({isOpen}) => {
    const dispatch=useDispatch();
    const {cartItems, total, amount}=useSelector((state=>state.cart))
    const {lang}=useSelector((state)=>state.lang)
  return (
    
    <Modal show={isOpen} >
        <Modal.Header className="d-flex align-items-center justify-content-between">         
            <div 
            onClick={()=>dispatch(open())}
            className="d-flex align-items-center justify-content-center pointer">
                <HiChevronLeft />
                <span>{lang ? "Alverə davam et": "Continue shopping"}</span>
            </div>
            <div>
            {lang ? "Səbətdəki məhsullar" : "Items in your cart"} ({amount})
            </div>
          
        </Modal.Header>
        <Modal.Body className='modalBody'>
            {cartItems.length===0?
            (<h4>
                {lang ? "Səbətin boş görünür" : "Your cart looks empty"} :/
            </h4>):(
                <>
                  {
                    cartItems.map(item=>(
                        <CartItem key={item.id} item={item}/>
                    ))
                  }
                </>
            )
        }
        </Modal.Body>
        <Modal.Footer >
          <div className="d-flex align-items-center justify-content-between w-100">

          <div>
              <p>{lang ? "Toplam qiymət:" : "Total cost:"}<strong> {total.toFixed(2)}</strong> AZN</p>
            </div>
            <div className="d-flex align-items-center justify-content-between ">
              {
                cartItems.length>0 && 
                <>
                <HiTrash 
                onClick={()=>dispatch(clear())}
                size='1.7rem' className='mx-2 pointer'/>

                  <Button 
                    onClick={()=>dispatch(open())}
                    variant='dark'>
                      {lang ? "Təstiqlə" : "CheckOut"}
                  </Button>
                </>
              }

            </div>
          </div>
          <Button 
              onClick={()=>dispatch(open())}
              variant='dark'
              className='w-100'>
                {lang ? "Bağla" : "Close"}
            </Button>
           
          
        </Modal.Footer>
      </Modal>
  )
}

export default CheckOut
