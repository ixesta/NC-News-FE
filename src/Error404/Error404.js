import React from 'react';
import { Link } from 'react-router-dom';


function Error404() {
  return <div className='error'>
    <h1 id='error'><Link to='/'>Ooops, we couldn't find that page. Please, check the address or click on this box to go the homepage.</Link></h1>
  </div>
}


export default Error404;