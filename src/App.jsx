import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './App.css';
import authService from './appwrite/auth';
import { login, logout } from "./store/authSlice";
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-gray-500'>
      <Header />
      <main className='flex-grow pt-16'>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;

