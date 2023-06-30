import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div className='cars'>
    {props.cars.map((car, index) => (
      <div key={index}>
        <ListItem car={car} />
      </div>
    ))}
  </div>
);

export default List;
