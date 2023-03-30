import React from 'react'
import { loginUrl } from '../scripts/spotify'
import '../styles/login.css'

function Login ()  {
  return (
    <div className='login'>
        {/* spotify logo */}
        <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />   

        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      
    </div>
  )
}

export default Login
