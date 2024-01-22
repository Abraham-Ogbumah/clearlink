import React from 'react'
import NavBar from './common/NavBar'
import Hero from './common/Hero/Hero'

const Header = () => {
  return (
    <header className='container hd-bg'>
        <NavBar />
        <Hero />
    </header>
  )
}

export default Header