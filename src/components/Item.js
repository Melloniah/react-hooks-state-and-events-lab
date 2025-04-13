import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart]=useState(false)

  function handleAddToCart(){
    setIsInCart((prevState)=>!prevState)
  }


  const liClass= isInCart? "in-cart":""
  const buttonText= isInCart? "Remove From Cart": "Add Toart"
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
