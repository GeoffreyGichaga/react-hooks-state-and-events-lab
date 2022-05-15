import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectItem,setSelectItem] = useState("Filter by category")

  function handleFilterView(event){
    setSelectItem(event.target.value)

  }

  const displayItems = items.filter((item)=>{
    if(selectItem ==="Filter by category")
    {
      return true
    }
    else{
      return item.category === selectItem
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterView}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
