import React, { Fragment } from "react";
import Meals from "./Components/Meals/MealSummary";
import Header from "./Components/Layout/Header";
import CartCheck from "./Components/Cart/CartCheck";

function App() {
  return (
    <Fragment>
      <CartCheck />
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
