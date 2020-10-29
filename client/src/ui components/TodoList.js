import React, { useState } from "react"
import { useTodo } from "../hooks"
import Button from '@material-ui/core/Button';
import Navbar from './Navbar'
import Leftcolumn from './Leftcolumn'
import Rightcolumn from './Rightcolumn'

// import { useTodo } from "../ducks/Todos"

function Todos(props) {
  return (
    <div
      onClick={props.onChange}
      style={{ height: "200px", width: "200px" }}
    ></div>
  )
}
export default () => {
  const { todos, links, addTodo, addLink, deleteTodo, completeTodo } = useTodo()

  console.log(links)
  
  
  
  const [inputText, setInputText] = useState("")


  const soundCloudLink2 =  inputText 


  
  const soundCloudLink = "https://soundcloud.com/nicklacemusic/kobe"
  const soundcloudPlayer = "https://w.soundcloud.com/player/?url="
  const soundCloudApi= "?//api.soundcloud.com/tracks/293"

  // const soundCloud = {soundcloudPlayer + soundCloudLink2 + soundCloudApi}

const soundCloudyeah = <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" onSubmit={handleSubmitLink} onChange={(e) => setInputText(e.target.value)}




src={soundcloudPlayer + soundCloudLink2 + soundCloudApi}>
</iframe>





  function handleSubmitLink(e) {
    // e.preventDefault()
    addLink(inputText)
    setInputText("")
  }



  function handleSubmit(e) {
    e.preventDefault()
    addLink(inputText)
    setInputText("")
  }
  function handleComp(id) {
    addLink(id)
  }
 

  


  return (
    <div className="container">
      <div className="wholeBody">
        <h1 className="headerTodo">todos</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            className="inputArea"
            type="text"
            value={inputText}
            placeholder="What needs to be done?"
            onChange={(e) => setInputText(e.target.value)}
          ></input>
        </form>
</div>

<Navbar></Navbar>
<Leftcolumn></Leftcolumn>
<Rightcolumn></Rightcolumn>










{/* <div>{soundCloud}</div> */}
<Button variant="contained" color="primary">
      Hello World
    </Button>

{links.map((item) => (
        <div className="todoInputBody" key={item.id}>
          <span className={item.completed === true ? "completed" : ""}>
            {soundCloudyeah}
          </span>
        </div>
        
      ))}


      {/* {todos.map((item) => (
        <div className="todoInputBody" key={item.id}>
          <input
            className="checkBox"
            type="checkbox"
            onClick={() => handleComp(item.id)}
          />
          <span className={item.completed === true ? "completed" : ""}>
            {item.input}
          </span>
          <button className="deleteButton" onClick={(e) => deleteTodo(item.id)}>
            X
          </button>
        </div>
        
      ))} */}
    </div>
  )
}
