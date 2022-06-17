import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { Container } from './style';

function Comment() {

	const [ comment, setComment] = useState<string>()
	const [ listComment, setListComment] = useState([])
	const [ numberText, setNumeberText] = useState(108)
	
	const addComment = ()=>{
		const listobjet = setListComment
		setListComment(list=> [...list, comment])
		setComment("")
	}
	
	useEffect(() => {
	});
	return (
		<Container>
			<h2>Postar novo comentário</h2>
				<Textarea width='80%' height='100px' maxLength={numberText}  onChange={(e) => 
					{setComment(e.target.value), console.log(e.target.value.length)}} value={comment}>
				</Textarea>
				<Button width='90%' height='36px' onClick={addComment}>Comentar</Button>
				<ul>
					{listComment.map(prop=>(
						<li key={prop}>{prop}</li>
					))}
				</ul>
		</Container>
	);
}

export default Comment;