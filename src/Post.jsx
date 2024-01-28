/**  
 * eu poderia tipar as props
 * 
 * interface Props {
 *  children : React.node
 *  title : string
 *  setState : React.dispatch<setStateAction<'o nome do tipo da variavel usestate'>>
 * }
 * 
*/
/**
 * import {AppContext} from 'path-to-app-context.jsx'
 * const userData = useContext(AppContext)
 * output ==> url user info, name, posts
 */

//eu poderia receber um array de objetos com os comments os perfis das pessoas
//que comentaram, como nome e o url da imagem de avatar no objeto pra renderizar
import { IoIosSend } from "react-icons/io";
import { Comment } from "./components/Comment";
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './post.module.css'
import { useState } from "react";
export const Post = ({ role,username, userImgUrl, title, description, comments, publishedAt}) => {
    //12:19
    const [thisPostComments, setThisPostComments] = useState(comments)
    const [commentText, setCommentText] = useState('')
    const formattedPublishedAt = format(publishedAt, "d 'de' LLLL 'às' HH:MM'h'", {
        locale : ptBR
    })   
    const relativeDateFormattedFromNow = formatDistanceToNow(publishedAt, {
        addSuffix :true,
        locale: ptBR
    }) 

    const handleCreateNewComment = (e) => {//e.target refer to the form onSubmit
        e.preventDefault()
       
        if(!commentText)return 
        else {
        const commentObject = {//object generated to appears in frontend instantly that came from useAuth
            userCommentName : "usuario q está logado",
            userCommentImgUrl : "https://github.com/luscacid.png",
            content : commentText,
            likes : Math.round(Math.random() * 40)
        }
       
        setThisPostComments(prevState => [...prevState, commentObject])
        setCommentText('')
        }
        //at least its only save in database this comment
    }

    const deleteComment = (comment_id) => {
        console.log(`id do comentario deletado: ${comment_id}`)
        const filteredCommentsAfterDeletedOne = thisPostComments.filter((comment) => comment.id !== comment_id)
        setThisPostComments(filteredCommentsAfterDeletedOne)
        
    }
    const throwCustomError = (e) => {
        console.log(e)
        //e.target.setCustomValidity('Para mandar uma mensagem, preencha este campo!') 
    }
    return (
       <article className={styles.article}>
            <header>
                 <div className={styles.userInfo}>            
                    <img 
                        src={userImgUrl} 
                        className={styles.userImg}
                    />
                    <div className={styles.userDisplayNames}>
                        <strong className={styles.username}> {username} </strong>
                        <span className={styles.userStack}> {role} </span>
                    </div>
                </div>  
                <time 
                title={formattedPublishedAt}
                dateTime = '2022-05-12'>{relativeDateFormattedFromNow}</time>  
            </header>
           
           <main className={styles.main}>
                <h2>{title}</h2>
                <p>{description}</p>
                
           </main>
            <label htmlFor="commentInput">Deixe seu feedback</label>
            <form 
                onSubmit={e => handleCreateNewComment(e)}
                className= {styles.formMessage}
            >
                <input
                    onChange = {e => setCommentText(e.target.value)}
                    value={commentText}
                    type="text" 
                    id='commentInput'
                    placeholder = 'Type a message here...' 
                    
                    required
                />
                <button disabled = {commentText.length===0}>
                    <IoIosSend size={20}/>
                </button>  
            </form>
            <section>
                Comments
            </section>
            {thisPostComments.length > 0 ? thisPostComments.map((comment, index) => {
                return (
                    <Comment 
                        key={String(index)} 
                        comment_id = {comment.id}        
                        username={comment.userCommentName}
                        imgUrl={comment.userCommentImgUrl}
                        commentText={comment.content}
                        countLikes={ comment.likes}
                        onDeleteComment = {deleteComment}
                    />
                )
            }) : (<div className={styles.firstComment}>Seja o primeiro a comentar</div>)}
       </article>
    )
}