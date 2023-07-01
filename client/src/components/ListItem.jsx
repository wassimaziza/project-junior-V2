import React, { useState } from 'react';
import ListOne from './listOne.jsx';

const ListItem = (props) => {
  const [details, setDetails] = useState(false);

  const handleDetails = () => {
    setDetails(true)
  }

  const handleLess = () => {
    setDetails(false)
  }

  if (details) {
    return (
      <div>
        <ListOne car={props.car} />
        <button className="btn1" onClick={handleLess}>Less Info</button>
      </div>
    )
  }

  return (
    <div className='cards'>
      <div>{props.car.name}</div>
      <div><img src={props.car.image} width='250' alt={props.car.name} /></div>
      <button className="btn1" onClick={handleDetails}>More Info</button>
    </div>
  )
}

export default ListItem;
