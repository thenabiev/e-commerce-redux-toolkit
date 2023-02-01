import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CarouselComponent from "./components/Carousel";
import CheckOut from "./components/CheckOut";
import ShoppingContainer from "./components/ShoppingContainer";
import { total } from "./components/State/Slice/СartSlice";


function App() {
  const {isOpen}=useSelector((state)=>state.checkout);
  const {cartItems}=useSelector((state)=>state.cart);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(total())
  },[cartItems])
  
  return (
    <div className="App">
      <br />
      <CarouselComponent />
      <br />
      <br />
      <ShoppingContainer />
      <br />
      <CheckOut isOpen={isOpen}/>
    </div>
  );
}

export default App;
