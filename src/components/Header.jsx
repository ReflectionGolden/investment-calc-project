import React from 'react'
import logo from '../assets/logoTransparent.png'

//C:\VSCode\ITOL\JavaScriptAndReact\React-Essentials\investment-calc-project\src\assets\logoTransparent.png

const Header = () => {
  return (
    <header className='text-center p-4' id="header">
      <img className='aspect-square w-60 object-contain mx-auto' src={logo} alt="Investment Calculator Logo"/>
      <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header
