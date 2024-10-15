import React from 'react'
import myImage from '../Assets/Images/logo/logo.png';

export default function logo_data() {
  return (
    <div className='logo_header'>
      <div>
      <img src={myImage} alt="logo" style={{height:100, width:100}}/>
      </div>
       
       <div>
        <ul>
          <li>About us</li>
          <li>What we do</li>
          <li>Data visualization</li>
          <li>Data</li>
        </ul>

       </div>
    </div>
  )
}
