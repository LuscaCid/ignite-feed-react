import styles from './comment.module.css'
import { AiTwotoneLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";


export function Comment ({username, commentText, imgUrl, countLikes}) {
  return (
    <div className = {styles.container}>
      <img src="https://github.com/acato21.png" className = {styles.commentImage}/>
      <div>
        <div className = {styles.commentArea}>
        <div className ={styles.user}>
          <span className= {styles.username}> igor gabriel</span>
        </div>
        <p className = {styles.comment}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore quaerat optio deleniti recusandae libero. Enim perspiciatis ea commodi eveniet magnam earum nihil, eaque, aliquid ad in eius eos. Quae.
        </p>
      </div>
        <span>
          aplaudir
          <button onClick = {() => console.log('clicou no like')}>
            <AiTwotoneLike size={15} />
          </button>
        </span>
      </div>
      
    </div>

  )
}