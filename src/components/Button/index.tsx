import React, { ButtonHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { Container } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button:React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <Container {...rest}>
            {children}
        </Container>
    );
}
