import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { P, BoxMessagem, Container, ShowButton, MessageDialog, MessageText, BoxButtonH } from './style';
import { FiXCircle } from "react-icons/fi";

function Comment() {

	const [ comment, setComment] = useState<string>()
	const [ messageExcluir, setmessageExcluir] = useState<string>()
	const [ listComment, setListComment] = useState([])
	const [ numberText, setNumeberText] = useState<number>()
  const [ isButton, setIsButton] = useState(false)
  const [ messageDialog, setMessageDialog] = useState(false)
  const [ indice, setIndice] = useState<string>()
	
	const addComment = ()=>{
    newComment(comment || "")
		setListComment(list=> [...list, comment])
		setComment("")
		setNumeberText(108)
    setIsButton(false)
	}
  const newComment = (comment: string) => {
    const commentsStorage = JSON.parse(localStorage.getItem("comments_bd"))
    let newComment
    const id = getNewID()
    if (commentsStorage) {
      newComment = [...commentsStorage, { comment, id }]
    } else {
      newComment = [{ comment }]
    }
    localStorage.setItem("comments_bd", JSON.stringify(newComment))
    return
  }

  const getNewID = () => {
    return Math.floor(Date.now() * Math.random()).toString(36)
  }

  const getComments = () => {
    const commentsStorage = JSON.parse(localStorage.getItem("comments_bd"))
    if (!commentsStorage) {
      localStorage.setItem("comments_bd", JSON.stringify([]))
    }
    return commentsStorage
  }

  const removeComment = (id: string) => {
    const commentsStorage = JSON.parse(localStorage.getItem("comments_bd"))

    if (!commentsStorage) {
      localStorage.setItem("comments_bd", JSON.stringify([]))
      return
    }
    const hasCommets = commentsStorage?.filter((prop) => prop.id !== id)
    localStorage.setItem("comments_bd", JSON.stringify(hasCommets))

    setDialogState()
  }
	const handleTextarae = (e: any) =>{
		const textTextare = e.target.value
		const maxLength = e.target.maxLength
		setComment(textTextare)
		const countCharacter = textTextare.length
		setNumeberText( maxLength - countCharacter )
    countCharacter >= 3? setIsButton(true) : setIsButton(false)
  }
  const isDialog = (prop:string, id:any) => {
    setmessageExcluir(prop)
    setIndice(id)
    setDialogState()
  }
  const setDialogState = () => {
    setMessageDialog(!messageDialog)
  }
  const boxMessage = () =>{
   return(
    <MessageDialog display={messageDialog? "flex" : "none"}>
      <MessageText>
        <FiXCircle onClick={setDialogState} color="var(--text-color-primary)" size={25} />
        <p>Apagar?</p>
        {messageExcluir}
        <BoxButtonH>
          <Button onClick={setDialogState}>Cancelar</Button>
          <Button onClick={()=> (removeComment(indice || ""))}>Excluir</Button>
        </BoxButtonH>
      </MessageText>
    </MessageDialog>
   )
  }
  const listText = getComments()
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
      {getComments().map((prop, i)=>(
        <P key={i}>
          <FiXCircle onClick={()=>{isDialog(prop.comment, prop.id)}} color="var(--text-color-primary)" size={20} />
          {prop.comment}
          </P>
        ))}
      </BoxMessagem>
      {boxMessage()}
		</Container>
	);
}

export default Comment;