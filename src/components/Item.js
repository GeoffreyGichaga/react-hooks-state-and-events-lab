import React,{useState} from "react";

function Item({ name, category }) {

  const [className,setClassName] = useState("")
  

  function handleClick(event){
    
    if(event.target.parentNode.className === "")
    {
      setClassName(event.target.parentNode.className = "in-cart")
      

    }
    else {
      setClassName(event.target.parentNode.className = "")

    }

    console.log(event.target.parentNode.className);
    

    





  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{className? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
