import { PropsWithChildren } from 'react';
import './styles.css';

export const Container = ({ children }: PropsWithChildren) => {
    return <div className='container'>{children}</div>;
};
