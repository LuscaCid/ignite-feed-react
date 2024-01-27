import { createContext, useContext, useEffect, useState } from "react";
import { fakePosts } from '../database/data'
 
//fake posts its like an fetching data from database for 
//posts that the user can see

export const AppContext = createContext([])

/**
 * interface Props {
 *  children : React.node
 * }
 */

export const FeedContext = (props) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    setPosts(prevState => [...prevState, fakePosts])
  },[])

  return (
    <AppContext.Provider value={posts}>
      {props.children}
    </AppContext.Provider>
  )
}
export const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}

//abracar a aplicacao com esse context