import React from 'react'
import Navbar from "../components/common/navBar"

import './styles/login.css'

function login() {
  return (
    <div className='login'>
      <Navbar active="login"/>

      <div className="container">
        <div className='card'>
          <div className="card-title">
            <h1>Login Admin</h1>
          </div>
          <form>
            {/* username input */}
            <label htmlFor="username">Username :</label>
            <input type="text" name="username" id="username" placeholder='username' required />
            {/* password input */}
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='password' required />
            <input type="submit" value="Masuk" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default login
