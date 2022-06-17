import styled from "styled-components";

type Textprops = {
    widht?: string;
    height?: string;
}

export const Container = styled.textarea<Textprops>`
    display: block;
    width: ${(prop)=>prop.widht};
    height: ${(prop)=>prop.height};
`