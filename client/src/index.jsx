import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import Add from './components/Add.jsx'
import Services from './components/Services.jsx'



const App = () => {
  const [cars, setCars] = useState([])
  const [page, setPage] = useState('home')
  
  useEffect(() => {
    $.ajax({
      url: 'http://localhost:3000/api/cars',
      success: (data) => {
        console.log(data)
        setCars(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [])
  
  
   
   const changePage = (newPage) => {
    setPage(newPage)
  }
  let content=null
  if (page === 'home') {
    content=      <List cars={cars}   />
  } else if (page === 'add') {
    content = <Add />
  } else if (page === 'services') {
    content = <Services />
  }

  return (
    <div>
       <header className="header">
        <img
          className="img1"
          src="https://militosautorepair.com/wp-content/uploads/2017/08/militos-auto-repair-logo-300x135.png"
          width="150"
        />
        <ul className="header-nav">
          <li className="header-item" onClick={() => changePage('home')}>
            Home
          </li>
          <li className="header-item" onClick={() => changePage('add')}>
            Add
          </li>
          <li className="header-item" onClick={() => changePage('services')}>
            Services
          </li>
        </ul>
      </header>
      <br />
      {content}
      <br/>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
