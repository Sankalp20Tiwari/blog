import React from 'react'
import { Login as LoginComponent } from '../components' // Use capitalized alias

function Login() {
  return (
    <div className='flex-1 max-w-sm p-6 bg-blue-600 rounded-lg shadow-lg'>
      <LoginComponent /> {/* Use the alias with a capital letter */}
    </div>
  )
}

export default Login
