import React from 'react';
import type { ButtonProps } from './Button.types';

const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    'outline-cta': 'btn-outline-cta',
};

const sizeClasses = {
    sm: 'text-sm px-5 py-2.5',
    md: '',
    lg: 'text-base px-9 py-4',
};

const Button: React.FC<ButtonProps> = ({
    children, variant = 'primary', size = 'md',
    href, onClick, className = '', icon, disabled = false,
}) => {
    const classes = `${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
                {icon && <span>{icon}</span>}
            </a>
        );
    }

    return (
        <button onClick={onClick} disabled={disabled} className={classes}>
            {children}
            {icon && <span>{icon}</span>}
        </button>
    );
};

export default Button;
