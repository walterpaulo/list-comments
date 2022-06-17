import React, { TextareaHTMLAttributes } from 'react';
import { Container } from './style';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea:React.FC<TextareaProps> = ({ children, ...rest }) => {
    return (
        <Container {...rest}>
            {children}
        </Container>
    );
}
