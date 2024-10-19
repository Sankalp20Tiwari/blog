import React from 'react'
import { Login as LoginComponent } from '../components' // Use capitalized alias

function Login() {
  return (
    <div className='flex-1 max-w-sm p-6 bg-gray-300 rounded-lg shadow-lg'>
      <LoginComponent /> {/* Use the alias with a capital letter */}
    </div>
  )
}

export default Login
