import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { P, BoxMessagem, Container } from './style';

function Comment() {

	const [ comment, setComment] = useState<string>()
	const [ listComment, setListComment] = useState([])
	const [ numberText, setNumeberText] = useState<number>()
	
	const addComment = ()=>{
		const listobjet = setListComment
		setListComment(list=> [...list, comment])
		setComment("")
		setNumeberText(108)
	}

	const handleTextarae = (e: any) =>{
		const textTextare = e.target.value
		const maxLength = e.target.maxLength
		setComment(textTextare)
		const countCharacter = textTextare.length
		setNumeberText( maxLength - countCharacter )
	}

	return (
		<Container>
			<h2>Postar novo comentário</h2>
				<Textarea width='80%' height='100px' maxLength={108} numberText={numberText} onChange={handleTextarae} value={comment}>
				</Textarea>
				<Button width='90%' height='36px' onClick={addComment}>Comentar</Button>
				<BoxMessagem>
				{listComment.map((prop, i)=>(
					<P key={i}>{prop}</P>
					))}
				</BoxMessagem>
		</Container>
	);
}

export default Comment;