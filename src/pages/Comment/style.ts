import styled from "styled-components";

export const Container = styled.div`
	width: 414px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	background-color: var(--bg-color-primary);
	padding-top: 10px;

	ul{
		width: 90%;
		list-style-type: none;
		
		li{
				margin-bottom: 10px;
				background-color: var(--bg-color-secondary);
				padding: 20px 5%;
				border-radius: 5px;
				color: var(--bg-color)
		}
	}
`