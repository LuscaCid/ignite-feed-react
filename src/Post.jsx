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

export const Post = ({children, title, description}) => {
    return (
        <div>
            <h1>{title}</h1>
            {description}
            {children && children}
            
        </div>
        
    )
}