import { Post } from "./Post"
import { Button } from "./Button"
import { Header } from "./components/header"
import './global.css'
import { Sidebar } from "./components/Sidebar"
import styles from './app.module.css'

function App() {

  return (
    <>
    <Header/>
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
              children={<Button title={"botao fi"}/>}
              title={"botao"}
            />
            <Post 
              description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. Al'}
              children={<Button title={"botao pai"}/>}
              title={"pai"}
            />
          </main>
      </div>
    </>
  )
}

export default App
