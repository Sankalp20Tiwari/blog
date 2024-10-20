import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div>
      <button
        className='inline-block px-2 sm:px-2  duration-200 text-white text-lg border-none hover:scale-150 hover:text-gray-900 rounded-full'
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;