'use client'

import css from './Container.module.css';

interface ContainerProps {
    children: React.ReactNode;
    classes?: string[];
};

const Container = ({ children, classes = [] }: ContainerProps) => {
    const allClasses = [
        css.container,
        ...classes.map((cl) => css[cl] ?? cl),
    ].filter(Boolean);
    
    const className = allClasses.join(' ');

    return <div className={className}> {children} </div>;
};

export default Container;
