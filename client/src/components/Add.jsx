import React, { useState } from 'react';
import axios from 'axios';

function Add() {
  const [data, setData] = useState({
    name: '',
    year: '',
    company: '',
    status: '',
    image: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  console.log(data,"the obj");

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3000/api/cars', data)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log("hii");
        console.error(error)
      });
    // setData({
    //   name: '',
    //   year: '',
    //   company: '',
    //   status: '',
    //   image: ''
    // });
  };

  return (
    <div className='form'>
        <center>
      <form onSubmit={handleSubmit} >
        <label className='text' htmlFor='input'>
         <p>Name:</p> <input type="text" name='name' value={data.name} onChange={handleChange} placeholder="write the car's name" className='input'/>
        </label>
        <br />
        <label className='text' htmlFor='input'>
        <p>Year:</p><input type="text" name='year' value={data.year} onChange={handleChange} placeholder="write the car's year" className='input'/>
        </label>
        <br />
        <label className='text' htmlFor='input'>
        <p>Company:</p><input type="text" name='company' value={data.company} onChange={handleChange} placeholder="write the car's company" className='input'/>
        </label>
        <br />
        <label className='text' htmlFor='input'>
        <p>Status:</p> <input type="text" name='status' value={data.status} onChange={handleChange} placeholder="write the car's status" className='input'/>
        </label>
        <br />
        <label className='text' htmlFor='input'>
        <p>Image:</p><input type="text" value={data.image} name='image' onChange={handleChange} placeholder="write the car's image" className='input'/>
        </label>
        <br />
        <button onClick={handleSubmit}type="submit"  className='btn3'>Submit</button>
      </form>
      </center>
    </div>
  )
}

export default Add;
