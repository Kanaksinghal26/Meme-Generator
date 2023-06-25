import React from 'react'
import TrollFace from '../../assets/TrollFace.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={TrollFace} alt="" className='header_image'/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">-By Kanak Singhal</h4>
        </div>
    )
}

export default Header
