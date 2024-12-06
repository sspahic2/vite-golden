import React from 'react';
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

const ButtonCustom: React.FC<ICustomButton> = (props) => {
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
        outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    };

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${variantStyles[variant]} ${className}              
                        min-w-[100px] min-h-[24px] text-sm 
                        sm:w-[120px] sm:min-h-[28px] sm:text-lg  
                        md:w-[140px] md:h-[34px] md:text-md 
                        lg:w-[170px] lg:h-[38px] lg:text-xl
                        xl:w-[180px] xl:h-[44px] xl:text-xl
                        whitespace-nowrap overflow-hidden text-ellipsis`}
            style={{
                padding: '4px 8px',
                borderRadius: '50px',
                textAlign: 'center',
            }}
        >
            <Typography size="normal" className='flex flex-row items-center justify-center' >
                {startIcon && <i className={`${startIcon} mr-5`} />}
                {children || title}
                {endIcon && <i className={`${endIcon} mr-5`} />}
            </Typography>
        </button>
    );
};

export default ButtonCustom;
