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
  const setDialogState = () => {
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
  const isDialog = (prop:string, id:number) => {
    console.log(prop, id)

    boxMessage(prop,id)
    setDialogState()
  }

  const boxMessage = (prop: string, i: number) =>{
   return(
    <MessageDialog display="flex">
          <MessageText>
            <FiXCircle color="var(--text-color-primary)" size={25} />
            <p>Apagar?</p>
            <BoxButtonH>
              <Button>Cancelar</Button>
              <Button>Excluir</Button>
            </BoxButtonH>
        </MessageText>
    </MessageDialog>
   )
  }
  // const showBoxMessage = (i: number) => {
  //   const boxMessage = document.getElementById("idBox"+i.toString())
  //   // const boxMessage = document.querySelector("#idBox"+i.toString())

  //   // return boxMessage?.setAttribute('display','flex')
  //   boxMessage?.setAttribute('display', 'flex')
  //   return boxMessage?.attributes[0].value
  // }
  console.log(messageDialog)
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
        <P key={i}>
          <FiXCircle onClick={()=>{isDialog(prop, i)}} color="var(--text-color-primary)" size={20} />
          {prop} +{i}

          {/* {boxMessage(prop, i)} */}
          {/* {console.log('id',showBoxMessage(i))} */}

          {/* {messageDialog && console.log(document.getElementById("idBox"+i.toString()))} */}
          {/* {messageDialog && 
          <>
            {boxMessage(prop, i)}
            {document.getElementById("idBox"+i.toString())?.setAttribute("display", "none")}
            <MessageDialog
            display="flex">
            </MessageDialog>
          </>
          } */}
          </P>
        ))}
      </BoxMessagem>
      <MessageDialog display={messageDialog? "flex" : "none"}>
          <MessageText>
            <FiXCircle color="var(--text-color-primary)" size={25} />
            <p>Apagar?</p>
            <BoxButtonH>
              <Button>Cancelar</Button>
              <Button>Excluir</Button>
            </BoxButtonH>
        </MessageText>
    </MessageDialog>
		</Container>
	);
}

export default Comment;