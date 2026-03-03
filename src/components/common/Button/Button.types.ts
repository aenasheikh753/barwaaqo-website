export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-cta';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    onClick?: () => void;
    className?: string;
    icon?: string;
    disabled?: boolean;
}
