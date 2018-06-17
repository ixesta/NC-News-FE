import React from 'react';
import { Link } from 'react-router-dom';


function Error500() {
  return <div className='error'>
    <h1 id='error'><Link to='/'>Ooops, something went wrong. A team of highly trained monkeys has been dispatched to deal with this situation. If you see them, show them this information</Link></h1>
  </div>
}


export default Error500;