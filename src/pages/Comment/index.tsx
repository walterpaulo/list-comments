import React from 'react';
import Textarea from '../../components/Textarea';
import { Container } from './style';

function Comment() {
	return (
		<Container>
				<Textarea></Textarea>
				<button>Comentar</button>
				<ul>
					<li>Comentário 1</li>
					<li>Comentário 2</li>
				</ul>
		</Container>
	);
}

export default Comment;