  const localStore = () => {
    const commentsStorage = JSON.parse(localStorage.getItem("comments_bd"))
    if (!commentsStorage) {
      localStorage.setItem("comments_bd", JSON.stringify([]))
      return
    }
    return commentsStorage
  }

  const newComment = (comment: string) => {
    const commentsStorage = localStore()
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
    const commentsStorage = localStore()
    return commentsStorage
  }

  const removeComment = (id: string) => {
    const commentsStorage = localStore()

    const hasCommets = commentsStorage?.filter((prop: any) => prop.id !== id)
    localStorage.setItem("comments_bd", JSON.stringify(hasCommets))
  }

export { newComment, getComments, removeComment  } 