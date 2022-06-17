import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { P, BoxMessagem, Container, ShowButton } from './style';

function Comment() {

	const [ comment, setComment] = useState<string>()
	const [ listComment, setListComment] = useState([])
	const [ numberText, setNumeberText] = useState<number>()
  const [ isButton, setIsButton] = useState(false)
	
	const addComment = ()=>{
		const listobjet = setListComment
		setListComment(list=> [...list, comment])
		setComment("")
		setNumeberText(108)
    setIsButton(false)
	}

	const handleTextarae = (e: any) =>{
		const textTextare = e.target.value
		const maxLength = e.target.maxLength
		setComment(textTextare)
		const countCharacter = textTextare.length
		setNumeberText( maxLength - countCharacter )
    countCharacter >= 3? setIsButton(true) : setIsButton(false)
    }

	return (
		<Container>
      <img src='./images/imagep.jpg' alt='image' />
			<h2>Postar novo comentário</h2>
      <Textarea width='80%' height='100px' maxLength={108} numberText={numberText} onChange={handleTextarae} value={comment}>
      </Textarea>
      {isButton &&(
        <ShowButton>
        <Button width='100%' height='36px' onClick={addComment}>Comentar</Button>
      </ShowButton>
      )}
      <BoxMessagem>
      {listComment.map((prop, i)=>(
        <P key={i}>{prop}</P>
        ))}
      </BoxMessagem>
		</Container>
	);
}

export default Comment;