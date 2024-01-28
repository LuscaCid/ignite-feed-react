import { useState } from 'react';
import styles from './comment.module.css'
import { AiTwotoneLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaTrash } from 'react-icons/fa';


export function Comment ({comment_id,username, commentText, imgUrl, countLikes, onDeleteComment }) {
  const [displayLikes, setDisplayLikes] = useState(countLikes)
  const handleDeleteComment = () => {
    onDeleteComment(comment_id)
  }
  return (
    <div className = {styles.container}>
      <img src={imgUrl} className = {styles.commentImage}/>
      <div>
        <div className = {styles.commentArea}>
        <div className ={styles.user}>
          <span className= {styles.username}> {username}</span>
          <button onClick={handleDeleteComment}><FaTrash size={15}/></button>
        </div>
        <p className = {styles.comment}> {commentText} </p>
      </div> 
        <span>
          <button onClick = {() => 
            {
              setDisplayLikes(prevState => prevState + 1)
            }}>
            <AiTwotoneLike size={20}  />
            Aplaudir
            <span 
              className={styles.likes}
              >{displayLikes > 0 ? displayLikes : 0}
            </span>
          </button>
        </span>
      </div>
      
    </div>

  )
}