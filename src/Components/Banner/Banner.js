import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Money heist</h1>
            <div className='banner-buttons'>
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My list</button>
            </div>
            <h1 className='discription'>a Spanish TV series about a group of criminals who plan and execute heists on the Royal Mint and Bank of Spain</h1>
            <div className="fade_bottom"></div>
        </div>
      
    </div>
  )
}

export default Banner
