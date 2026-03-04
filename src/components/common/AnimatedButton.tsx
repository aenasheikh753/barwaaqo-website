import React from 'react';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

const variants = {
  primary: 'bg-cta text-white hover:bg-cta-dark',
  secondary: 'bg-primary text-white hover:bg-primary-dark',
  outline: 'border border-cta text-cta hover:bg-cta/10',
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`transition-transform duration-200 ease-out transform hover:scale-105 active:scale-95 rounded-full px-6 py-3 font-semibold ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
