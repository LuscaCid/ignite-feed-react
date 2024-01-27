import styles from './comment.module.css'
import { AiTwotoneLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaTrash } from 'react-icons/fa';


export function Comment ({username, commentText, imgUrl, countLikes}) {
  return (
    <div className = {styles.container}>
      <img src={imgUrl} className = {styles.commentImage}/>
      <div>
        <div className = {styles.commentArea}>
        <div className ={styles.user}>
          <span className= {styles.username}> {username}</span>
          <button><FaTrash size={15}/></button>
        </div>
        <p className = {styles.comment}> {commentText} </p>
      </div>
        <span>
          <button onClick = {() => console.log('clicou no like')}>
            <AiTwotoneLike size={20}  />
            Aplaudir
            <span className={styles.likes}>20</span>
          </button>
        </span>
      </div>
      
    </div>

  )
}