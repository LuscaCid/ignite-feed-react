import { Post } from "./Post"
import { Button } from "./Button"
import { Header } from "./components/header"
import './global.css'
import { Sidebar } from "./components/Sidebar"
import styles from './app.module.css'
import {useAppContext} from './hook/feedContext' 
import { useContext } from "react"
function App() {
  const data = useAppContext()
  //my data is posts that main user follows
  console.log(data)
  return (
    <>
    <Header/>
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {data.length > 0 ? data.map((post, index) => {
              return (
                <Post
                  key={String(index)} 
                  title={post.title}
                  username={post.username}
                  description={post.description}
                  role={post.role}
                  userImgUrl={post.userImgUrl}
                  comments={post.comments}
                
                /> 
              )


            }) : (<div className={styles.empty}>siga alguem para ver posts</div>)}
          </main>
      </div>
    </>
  )
}

export default App
