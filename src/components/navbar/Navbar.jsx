import React from 'react'
import './Navbar.css'
import filter from './filter.png'
import close from './close.png'

export default function Navbar() {
  return (
    <>
    <div className='navbar'>
        <div className='title'>Recently Generated Reports</div>
        <div className='buttons'>
            <button><img src={filter}/></button>
            <button><img src={close}/></button>
        </div>
    </div>
    </>
  )
}
