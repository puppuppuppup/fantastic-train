import { InputHTMLAttributes } from 'react';
import './styles.css';

export const Input = ({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
    return <input className={`input ${className}`} {...rest} />;
};
