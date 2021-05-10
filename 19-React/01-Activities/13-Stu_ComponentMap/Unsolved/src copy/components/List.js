import React from "react";

function List(props) {
  console.log(props)
  
  const notPurchased= props.gorceries.filter(item => !item.purchased)
  return (
    <ul className="list-group">
    {props.groceries.map(item => (
      <li key = {item.id}>
        {item.name}
      </li>

    ))}
    </ul>
    
  );
}

export default List;
