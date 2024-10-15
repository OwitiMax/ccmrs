import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  return (
    <div className='Header'>
      <div className='sub_Header1'><p id='intro_msg'>Monitor GHG gases in the atmospere </p></div>
      <div className='sub_Header2'><ul className='info_list'>
        <li className='list_item'>Blogs</li>
        <li className='list_item'>Events</li>
        <li className='list_item'>Research and Findings</li>
        <li className='list_item'>Educational Resources</li>
      </ul></div>
      <div style={{display:'flex' }}>
        <div>
        <input type='text' id='search_bar_head' placeholder="search..." style={{ width: 150, border: 'none',fontSize:11,padding:3.5}} />
        </div>
        <div>
        <IoIosSearch style={{background:'#f37230',color:'white',padding:1.8}} />
        </div>
         </div>

    </div>
  )
}

export default Header