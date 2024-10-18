import React from 'react';

export default function Button({
    children,
    type = 'button',
    bgColor = 'bg-gray-900',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg transition duration-200 ease-in-out ${className} ${bgColor} ${textColor} hover:bg-yellow-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
      {...props}
    >
      {children}
    </button>
  );
}



