import styled from "styled-components";

type Textprops = {
    widht?: string;
    height?: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
`

export const Texts = styled.textarea<Textprops>`
    display: block;
    width: ${(prop)=>prop.widht};
    height: ${(prop)=>prop.height};
    border-style: none;
    padding: 5%;
    font-size: 20px;
    border-radius: 5px;
`

export const MaxLengthTextare = styled.div`
    position: absolute;
    bottom: 3px;
    right: 40px;
    font-size: 12px;
    color: var(--color-bg-black);

`