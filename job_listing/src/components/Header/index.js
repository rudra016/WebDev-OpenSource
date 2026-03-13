import React from 'react'
import './style.css'
import RoundedRectangle from './Roundedbox/roundedbox'
const Header = () => {

    return (
        <div className='header'>
            <RoundedRectangle top="-285px" left="86px" />
            <RoundedRectangle top="-870px" left="480px" />
            <RoundedRectangle top="-1100px" left="880px" />
            <RoundedRectangle top="-1600px" left="1250px" />
        </div>
    )
}

export default Header
