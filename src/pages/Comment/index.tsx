import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { P, BoxMessagem, Container, ShowButton, MessageDialog, MessageText, BoxButtonH, ImgComment } from './style';
import { FiXCircle } from "react-icons/fi";
import { getComments, newComment, removeComment } from '../../services/dataLocal';
import { Text2 } from '../../components/Text2';

function Comment() {

	const [ comment, setComment] = useState<string>()
	const [ messageExcluir, setmessageExcluir] = useState<string>()
	const [ numberText, setNumeberText] = useState<number>()
  const [ isButton, setIsButton] = useState(false)
  const [ messageDialog, setMessageDialog] = useState(false)
  const [ indice, setIndice] = useState<string>()
	
	const addComment = ()=>{
    newComment(comment || "")
		setComment("")
		setNumeberText(108)
    setIsButton(false)
	}

  const deleteComment = (id: string) => {
    setDialogState()
    removeComment(id)
  }
	const handleTextarae = (e: any) =>{
		const textTextare = e.target.value
		const maxLength = e.target.maxLength
		setComment(textTextare)
		const countCharacter = textTextare.length
		setNumeberText( maxLength - countCharacter )
    countCharacter >= 3? setIsButton(true) : setIsButton(false)
  }
  const isDialog = (prop:string, id:string) => {
    setmessageExcluir(prop)
    setIndice(id)
    setDialogState()
  }
  const setDialogState = () => {
    setMessageDialog(!messageDialog)
  }
  const getCommentTitle = () =>{
    const numberTotal = getComments().length
    return numberTotal > 0 ? `Comentários(${numberTotal})`: "Seja a primeira pessoa a comentar"
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
          <Button onClick={()=> (deleteComment(indice || ""))}>Excluir</Button>
        </BoxButtonH>
      </MessageText>
    </MessageDialog>
   )
  }
  const listText = getComments()
	return (
		<Container>
      <ImgComment src='./images/imagep.jpg' alt='image' min-width={200}/>
      <Text2>{getCommentTitle()}</Text2>
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