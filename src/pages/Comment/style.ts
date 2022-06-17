import styled from "styled-components";

export const Container = styled.div`
	width: 414px;
	min-height: calc(100vh - 10px);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	background-color: var(--bg-color-primary);
	padding-top: 10px;
`
export const BoxMessagem = styled.div`
	width: 90%;
	`
export const P = styled.p`
	margin-bottom: 10px;
	background-color: var(--bg-color-secondary);
	padding: 20px 5%;
	border-radius: 5px;
	color: var(--bg-color);
	max-height: 80px;
	word-wrap:break-word;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
