import React, { ButtonHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { Container } from './style';

type ButtonProps = {
    width?: string;
    height?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button:React.FC<ButtonProps> = ({ children, width, height, ...rest }) => {
    return (
        <Container widht={width} height={height} {...rest}>
            {children}
        </Container>
    );
}
