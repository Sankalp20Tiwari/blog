import React from 'react';

export default function Button({
    children,
    type = 'button',
    bgColor = 'bg-gray-500 ',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg  transition duration-200 ease-in-out border border-black/10 ${className} ${bgColor} ${textColor} `}
      {...props}
    >
      {children}
    </button>
  );
}



