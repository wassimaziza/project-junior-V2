import React from 'react';
import axios from 'axios';


// const dele = (id)=>{
//   axios.delete (`/api/cars/${id}`).then((res)=>{
//     console.log(res)
//   }).catch((err)=>{
//     console.log(err)
//   })
//  }
//  still working on them 
// const up =(id,body)=>{
//   axios.put(`/api/cars/${id}`,body).then((res)=>{
//     console.log(res)
//   }).catch((err)=>{
//     console.log(err)
//   })
//  }
const ListItem = (props) => (
  <div className='car'>
    <center>
    <div >Client's car: <p>{ props.car.name }</p></div>
    <div >Company : <p>{props.car.company}</p></div>
    <div >model :<p>{props.car.year}</p></div>
    <div ><img src={props.car.image} width="250"/></div>
    <div >Car status:<p> {props.car.status}</p></div>
    <div className='btn'><button className='btn1'>update car</button> <button className='btn2'>delete car</button></div>
    </center>
  </div>
)

export default ListItem;