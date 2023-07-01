import React, { useState } from 'react';
import axios from 'axios';

const ListOne = (props) => {
  const [update, setUpdate] = useState(false);
  const [input, setInput] = useState('');

  const dele = (id) => {
    axios.delete(`http://localhost:3000/api/cars/${id}`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const up = (id, status) => {
    
    axios.put(`http://localhost:3000/api/cars/update/${id}` , {status})
      .then((res) => {
        console.log( "res " , res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleUp = () => {
    setUpdate(!update)
  }



  return (
    <div className='car'>
      <center>
        <div>Client's car: <p>{props.car.name}</p></div>
        <div>Company: <p>{props.car.company}</p></div>
        <div>Model: <p>{props.car.year}</p></div>
        <div><img src={props.car.image} width="250" alt="Car" /></div>
        <div>Car status: <p>{props.car.status}</p></div>


        <div className='btn'>
          <button className='btn1' onClick={() => {handleUp()}}>
            update car
          </button>
          <button className='btn2' onClick={() => dele(props.car.id)}>
            delete car
          </button>
        </div>
        {update && (<form >
  <input  value={input} onChange={(e) => {setInput(e.target.value)}} />
  <button onClick={() => {up(props.car.id , input) ,console.log(props.car.id , input)}} type="submit">update</button>
           
          </form>
        )}
      </center>
    </div>
  )
}

export default ListOne;
