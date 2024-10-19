import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'> 
            {label && (
                <label className='inline-block mb-1 pl-1 text-white' htmlFor={id}>
                    {label}
                </label> 
            )}
            <input
                type={type} 
                className={`px-3 py-2 rounded-lg bg-transparent text-white placeholder-gray-400 outline-none focus:bg-gray-800 duration-200 border border-white w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
                placeholder={props.placeholder} // Ensure placeholder shows correctly
            />
        </div>
    );
});

export default Input;
