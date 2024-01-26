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
import styles from './post.module.css'
export const Post = ({children, title, description}) => {
    return (
       <article className={styles.article}>
            <header>
                 <div className={styles.userInfo}>            
                    <img 
                        src="https://github.com/luscacid.png" 
                        className={styles.userImg}
                    />
                    <div className={styles.userDisplayNames}>
                        <strong className={styles.username}>
                            Lucas Cid
                        </strong>
                        <span className={styles.userStack}>
                            web developer
                        </span>
                    </div>
                </div>  
                <span className={styles.timePosted}>
                    5 mins ago
                </span>  
            </header>
           
           <main>
                <h2>
                    minha primeira aventura
                </h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores dolore nostrum quo hic ipsam commodi laudantium, ipsa, necessitatibus perspiciatis accusantium a nobis quas recusandae neque atque dolorum rem aliquid aperiam.
                </p>
                
           </main>

       </article>
    )
}