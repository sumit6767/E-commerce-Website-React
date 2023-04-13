import React, { Fragment, useState } from "react";
import Meals from "./Components/Meals/MealSummary";
import Header from "./Components/Layout/Header";
import CartCheck from "./Components/Cart/CartCheck";

function App() {
  const [showCart,setShowCart] = useState(false);
  function showHandler(){
    setShowCart(true)
  }
  function closeHandler(){
    setShowCart(false);
  }
  return (
    <Fragment>
      {
      showCart ? <CartCheck onClose={closeHandler}/> :
      <>
      <Header onShow={showHandler} />
      <Meals />
      </>
      }
    </Fragment>
  );
}

export default App;
