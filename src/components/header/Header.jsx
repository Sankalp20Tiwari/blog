import React, { useState } from 'react';
import { Container, LogoutBtn } from "../index";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev); // Toggle menu state
  };

  const handleNavClick = (slug) => {
    navigate(slug);
    setMenuOpen(false); // Close the menu after navigation
  };

  return (
    <header className='py-3 bg-gradient-to-r from-gray-900 to-gray fixed top-0 left-0 w-full z-50'>
      <Container>
        <nav className='flex justify-between items-center'>
          <div className='mr-auto'>
            <Link to=''>
              <h1 className='text-white text-4xl '>.blog</h1>
            </Link>
          </div>

          {/* Hamburger Menu for small screens (always visible) */}
          <div className='block lg:hidden'>
            <button onClick={handleMenuToggle} className='text-white text-2xl'>
              <FaBars />
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className='hidden lg:flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.slug)}
                    className='inline-block px-4 pt-3 duration-200 text-white text-lg rounded-full  hover:text-gray-900 md:px-4 sm:px-2'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>

        {/* Dropdown Menu for mobile screens */}
        {menuOpen && (
          <div className='absolute top-16 left-0 w-full bg-gradient-to-r from-gray-900 to-gray p-4 rounded-lg shadow-lg z-10'>
            <ul>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name} className='my-2'>
                    <button
                      onClick={() => handleNavClick(item.slug)} // Use the new function
                      className='block text-white text-lg hover:bg-gray-700 rounded-md p-2 w-full text-left'
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;




