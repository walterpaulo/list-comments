import styled from "styled-components";

type Buttonprops = {
  widht?: string;
  height?: string;
}

export const Container = styled.button<Buttonprops>`
  display: block;
  width: ${(prop)=>prop.widht};
  height: ${(prop)=>prop.height};
  background: var(--color-bg-black);
  color: var(--bg-color);
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: box-shadow .7s;

  &:hover{
    box-shadow: 5px 10px var(--bg-color-secondary);
  }
`