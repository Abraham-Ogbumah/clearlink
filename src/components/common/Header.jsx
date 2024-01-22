import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'

const Header = () => {
  return (
    <header className='container hd-bg'>
        <NavBar />
        <Hero />
    </header>
  )
}

export default Header