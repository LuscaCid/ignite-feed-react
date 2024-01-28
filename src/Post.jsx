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
import { useState } from 'react'
import { Comment } from "./components/Comment";
import {format, formatDistanceToNow} from 'date-fns'
import styles from './post.module.css'
export const Post = ({ role,username, userImgUrl, title, description, comments}) => {
    const [commentText, setCommentText]= useState('')
    
    function handleSendMessage(e){

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
                <time dateTime = '2022-05-12'>Publicado ha 1h</time>  
            </header>
           
           <main className={styles.main}>
                <h2>{title}</h2>
                <p>{description}</p>
                
           </main>
            <label htmlFor="commentInput">Deixe seu feedback</label>
            <form className= {styles.formMessage}>
                <input
                    onChange = {e => setCommentText(e.target.value)}
                    type="text" 
                    id='commentInput'
                    placeholder = 'Type a message here...' 
                />
                <button onClick = {e => handleSendMessage(e)}>
                    <IoIosSend size={20}/>
                </button>  
            </form>
            <section>
                Comments
            </section>
            {comments.length > 0 ? comments.map((comment, index) => {
                return (
                    <Comment 
                        key={String(index)} 
                        username={comment.userCommentName}
                        imgUrl={comment.userCommentImgUrl}
                        commentText={comment.content}
                        countLikes={ comment.likes}
                    />
                )
            }) : (<div className={styles.firstComment}>Seja o primeiro a comentar</div>)}
       </article>
    )
}