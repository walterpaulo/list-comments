import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { Container } from './style';

function Comment() {

	const [ comment, setComment] = useState<string>()
	const [ listComment, setListComment] = useState([])
	
	const addComment = ()=>{
		const listobjet = setListComment
		setListComment(list=> [...list, comment])
		setComment("")
	}
	return (
		<Container>
				<Textarea onChange={(e) => 
					{setComment(e.target.value)}} value={comment}>
				</Textarea>
				<Button onClick={addComment}>Comentar</Button>
				<ul>
					{listComment.map(prop=>(
						<li key={prop}>{prop}</li>
					))}
				</ul>
		</Container>
	);
}

export default Comment;