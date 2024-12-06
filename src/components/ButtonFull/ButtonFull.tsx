// import React from 'react'

// interface ICustomButton {
//     onClick: () => void;
//     children?: React.ReactNode;
//     className?: string;
//     variant?: 'primary' | 'secondary' | 'danger' | 'outline';
//     title: string;
// }


// const ButtonFull: React.FC<ICustomButton> = (props) => {

//     const {
//         onClick,
//         children,
//         className = '',
//         variant = 'primary',
//         title
//     } = props;

//     const variantStyles = {
//         primary: "bg-primary text-white hover:bg-[#d19c5b]",
//         secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
//         danger: "bg-red-500 text-white hover:bg-red-600",
//         outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
//     };

//     return (
//         <div>
//             <button onClick={onClick}
//                 className={`${variantStyles[variant]} ${className} w-full btnItem`}
//             >
//                 {children || title}
//             </button>

//         </div>
//     )
// }

// export default ButtonFull


import React from 'react'
import Typography from '../Typography';

interface ICustomButton {
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
    title: string;
    startIcon?: string;
    endIcon?: string;
    type?: 'button' | 'submit' | 'reset';
}


const ButtonFull: React.FC<ICustomButton> = (props) => {

    const {
        onClick,
        children,
        className = '',
        variant = 'primary',
        title,
        startIcon,
        endIcon,
        type = 'button'
    } = props;

    const variantStyles = {
        primary: "bg-primary text-white hover:bg-[#d19c5b]",
        secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
        danger: "bg-red-500 text-white hover:bg-red-600",
        outline: "text-black hover:bg-gray-400 hover:text-white",
    };

    return (
        <div>
            <button
                onClick={onClick}
                type={type}
                className={`${variantStyles[variant]} ${className}              
                    min-h-[24px] text-sm 
                    sm:min-h-[28px] sm:text-lg  
                     md:h-[34px] md:text-md 
                   lg:h-[38px] lg:text-xl
                    xl:h-[44px] xl:text-xl
                    whitespace-nowrap overflow-hidden text-ellipsis btnItem w-full`}
            >
                <Typography size="normal" className='flex flex-row items-center justify-center' >
                    {startIcon && <i className={`${startIcon} mr-5`} />}
                    {children || title}
                    {endIcon && <i className={`${endIcon} ml-2`} />}
                </Typography>
            </button>

        </div>
    )
}

export default ButtonFull