import styled from "styled-components";

type BoxProps = {
	display: string
}

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
	position: relative;
	background-color: var(--bg-color-secondary);
	padding: 20px 5%;
	border-radius: 5px;
	color: var(--bg-color);
	max-height: 80px;
	word-wrap:break-word;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	min-height: 24px;

	svg{
		position: absolute;
		top: 3px;
		right: 5px;
		cursor: pointer;
	}
`
export const MessageDialog = styled.div<BoxProps>`
	display: ${prop=> prop.display? prop.display : 'none'};
	position: fixed;
	top: 0;
	left: 0;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.7);
	width: 100vw;
	height: 100%;
	z-index: 9;
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
	z-index: 10;
	position: relative;

	svg{
		position: absolute;
		top: 6px;
		right: 6px;
		cursor: pointer;
	}
`
export const BoxButtonH = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 10px
`