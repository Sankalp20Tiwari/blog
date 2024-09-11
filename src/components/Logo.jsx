import React from 'react';

function Logo({ width = '100px', height = '100px' }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauGniVwH6D8-YbRQ0VDepGq8ZoKMHcMXYOg&s"
        alt="Logo"
        style={{ width, height }} // Dynamically set width and height
        className="object-contain" // Makes the image fit within its container
      />
    </div>
  );
}

export default Logo;
