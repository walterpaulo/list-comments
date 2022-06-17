import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { P, BoxMessagem, Container, ShowButton, MessageDialog, MessageText, BoxButtonH } from './style';
import { FiXCircle } from "react-icons/fi";

function Comment() {

	const [ comment, setComment] = useState<string>()
	const [ listComment, setListComment] = useState([])
	const [ numberText, setNumeberText] = useState<number>()
  const [ isButton, setIsButton] = useState(false)
  const [ messageDialog, setMessageDialog] = useState(false)
	
	const addComment = ()=>{
		const listobjet = setListComment
		setListComment(list=> [...list, comment])
		setComment("")
		setNumeberText(108)
    setIsButton(false)
	}

  const isDialog = () => {
    setMessageDialog(!messageDialog)
  }

	const handleTextarae = (e: any) =>{
		const textTextare = e.target.value
		const maxLength = e.target.maxLength
		setComment(textTextare)
		const countCharacter = textTextare.length
		setNumeberText( maxLength - countCharacter )
    countCharacter >= 3? setIsButton(true) : setIsButton(false)
  }
  console.log(messageDialog)
	return (
		<Container>
      <MessageDialog 
        display={messageDialog? 'flex' : 'none'}
        onClick={isDialog}>
        <MessageText>
          <p>Apagar?</p>
          <BoxButtonH>
            <Button>Cancelar</Button>
            <Button>Excluir</Button>
          </BoxButtonH>
        </MessageText>
      </MessageDialog>
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
        <P key={i}>
          <FiXCircle onClick={isDialog} color="var(--text-color-primary)" size={20} />
          {prop}</P>
        ))}
      </BoxMessagem>
		</Container>
	);
}

export default Comment;