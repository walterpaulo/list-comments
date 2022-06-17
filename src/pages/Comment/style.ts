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
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	margin: 10px 0 40px 0;
`
export const BoxMessagem = styled.div`
	width: 90%;
	margin-bottom: 60px;
	`
export const ShowButton = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
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
	min-height: 24px;
`
export const MessageDialog = styled.div`
	display: none;
	position: absolute;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
	width: 100vw;
	height: 100vh;
	z-index: 999;
	justify-content: center;
	align-items: center;
`
export const MessageText = styled.div`
	display: flex;
	background-color: var(--bg-color);
	width: 270px;
	height: 120px;
	border-radius: 5px;
	color: var(--color-bg-black);
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`
export const BoxButtonH = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 10px
`