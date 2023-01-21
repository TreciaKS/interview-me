import React from 'react'
import logo from '../Images/Logo.png'

const Logo = () => {
  return (
    <nav className="flex items-center justify-between mx-auto max-w-7xl">
        <a href="/" title="Interview Me Home Page" className="flex items-center">
          <div className="w-auto h-6">
            <img src={logo} alt="InterviewMe logo" />
          </div>
        </a>
    </nav>
  )
}

export default Logo