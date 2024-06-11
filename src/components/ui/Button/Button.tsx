import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './styles.css';

export const Button = ({
    children,
    className,
    ...rest
}: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={`btn ${className}`} {...rest}>
            {children}
        </button>
    );
};
