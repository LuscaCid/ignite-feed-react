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
import styles from './post.module.css'
export const Post = ({children, title, description, commentsArray}) => {
    const [commentText, setCommentText]= useState('')

    function handleSendMessage(e){

    }

    return (
       <article className={styles.article}>
            <header>
                 <div className={styles.userInfo}>            
                    <img 
                        src="https://github.com/luscacid.png" 
                        className={styles.userImg}
                    />
                    <div className={styles.userDisplayNames}>
                        <strong className={styles.username}> Lucas Cid </strong>
                        <span className={styles.userStack}> web developer </span>
                    </div>
                </div>  
                <time dateTime = '2022-05-12'>Publicado ha 1h</time>  
            </header>
           
           <main className={styles.main}>
                <h2>minha primeira aventura</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores dolore nostrum quo hic ipsam commodi laudantium, ipsa, necessitatibus perspiciatis accusantium a nobis quas recusandae neque atque dolorum rem aliquid aperiam.
                </p>
                
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
            
       </article>
    )
}