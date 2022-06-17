import React from 'react';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { Container } from './style';

function Comment() {
	return (
		<Container>
				<Textarea ></Textarea>
				<Button>Comentar</Button>
				<ul>
					<li>Comentário 1</li>
					<li>Comentário 2</li>
				</ul>
		</Container>
	);
}

export default Comment;