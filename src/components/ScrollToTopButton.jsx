import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        onClick={handleScrollToTop}
       className='fixed bottom-8 right-8 bg-gray-500 text-white rounded-full p-3 shadow-lg'
      >
         <i className="fas fa-arrow-up"></i>
      </button>
    )
  );
};



export default ScrollToTopButton;

