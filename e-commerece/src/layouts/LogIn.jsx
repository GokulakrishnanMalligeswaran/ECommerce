import React from 'react'
import '../styles/LogIn.css'
const LogIn = () => {
    
  return (
    <div className="login_container">
        <h1>Log In</h1>
        <div className="loginfields">
            <input type="email" placeholder='Email Id' />
            <input type="password" placeholder='Password' />
            <button>Login</button>
            <div className='new_account'>
            <p>Create new Account.</p>
            <a href="signup">Sign Up</a>
            </div>
        </div>
    </div>
  )
}

export default LogIn