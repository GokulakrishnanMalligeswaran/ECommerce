import React from 'react'

const SignUp = () => {
  return (
    <div className='signup_container'>
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='Password' />
        <input type="checkbox"  name="terms_and_conditions"/>
        <label htmlFor="terms_and_conditions">I agree to the terms of use and conditons</label>
        <button>Submit</button>
        
    </div>
  )
}

export default SignUp