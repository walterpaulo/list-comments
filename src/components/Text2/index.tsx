import React from 'react';
import { H2 } from './style';

type H2Props = {
  children: string
} 
export const Text2:React.FC<H2Props> = ({ children }) => {
  return (
    <H2>
      {children}
    </H2>
  )
}
