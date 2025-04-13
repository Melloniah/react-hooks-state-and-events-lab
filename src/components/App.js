import React, {useState}  from "react";
import "../index.css";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [toggle, setToggle]=useState(false)
  const appClass = toggle? "App dark" : "App light"


  function toggleMode(){
    setToggle(function (prevMode){
      return !prevMode
    });
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
