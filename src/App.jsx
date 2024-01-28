import { Post } from "./Post"
import { Header } from "./components/header"
import './global.css'
import { Sidebar } from "./components/Sidebar"
import styles from './app.module.css'
import {useAppContext} from './hook/feedContext' 

function App() {
  const data = useAppContext()
  //my data is posts that main user follows

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
                  publishedAt = {post.publishedAt}
                /> 
              )
            }) : (<div className={styles.empty}>Siga alguém para ver posts</div>)}
          </main>
      </div>
    </>
  )
}

export default App
