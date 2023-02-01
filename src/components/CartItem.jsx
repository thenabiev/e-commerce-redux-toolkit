import React from 'react';
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, remove } from './State/Slice/СartSlice';

const CartItem = ({item}) => {
    const dispatch=useDispatch();
    const {id, name, price, amount, image}=item;
    const {lang}=useSelector((state)=>state.lang);

  return (
            <div
                
                className="cartItem d-flex justify-content-between align-items-center">
                    <div className="product d-flex  justify-content-between align-items-center">
                    <div className="imgBox">
                        <img src={image}/>
                    </div> 
                    <div >
                        <strong className='ms-1'>
                            {name}
                        </strong>
                        <p className='ms-1'>{lang ? "Toplam:" : "Total:"} {(price * amount).toFixed(2)} AZN</p>
                    </div>
                    </div>
                    <div className="details">
                        <div className="amount">
                            <div className="number d-flex justify-content-between align-items-baseline">

                                <HiOutlineMinus 
                                onClick={()=>dispatch(decrease(item))}
                                size="15px" cursor="pointer"/>

                                <p style={{fontSize:'18px'}}>{amount}</p>

                                <HiOutlinePlus 
                                onClick={()=>dispatch(increase(item))}
                                size="15px" cursor="pointer"/>

                            </div>
                            <div 
                            onClick={()=>dispatch(remove(item))}
                            className="btn btn-sm badge btn-secondary">
                                {lang ? "Səbətdən sil" : "Remove"}
                            </div>
                        </div>
               </div>
                </div>
  )
}

export default CartItem
