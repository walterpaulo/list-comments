import React, { TextareaHTMLAttributes } from 'react';
import { Texts, MaxLengthTextare, Container } from './style';

type TextareaProps = {
   width?: string;
   height?: string;
   numberText?: number;
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea:React.FC<TextareaProps> = ({ children, width, height, maxLength, numberText, ...rest }) => {
    return (
        <Container>
            <Texts widht={width} height={height} maxLength={maxLength} {...rest}>
                {children}
            </Texts>
            <MaxLengthTextare>
                {maxLength && numberText}
            </MaxLengthTextare>
        </Container>
    );
}
