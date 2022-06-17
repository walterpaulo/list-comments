import React, { TextareaHTMLAttributes } from 'react';
import { Container } from './style';

type TextareaProps = {
   width?: string;
   height?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea:React.FC<TextareaProps> = ({ children, width, height, ...rest }) => {
    return (
        <Container widht={width} height={height} {...rest}>
            {children}
        </Container>
    );
}
