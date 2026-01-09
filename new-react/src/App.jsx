import { useState } from 'react'
import './App.css'

function TodoList() {
  // TODO: Store in state.
  const [todoList, setTodoList] = useState(
    [
      {
        name: "Read for exam",
        isComplete: false,
      },
      {
        name: "Complete html day 1",
        isComplete: true
      },
      {
        name: "Complete html day 2",
        isComplete: true
      }
    ]);

  const [myText, setMyText] = useState("");

  return (
    <>
      <input
        onChange={(e) => {
          setMyText(e.target.value)
        }}
        value={myText}
      ></input>
      <h4>On Input: {myText}</h4>
      <button onClick={() => {
        const newArray = [
          ...todoList,
          {
            name: myText,
            isComplete: false
          }
        ]

        setTodoList(
          newArray
        )
        setMyText("")
      }}
      >
        Click to Add
      </button>

      <ul>
        {todoList.map(item => {
          return <><li className={item.isComplete ? "complete" : ""}>{item.name}</li>
            <button onClick={()=>{
              // update item isComplete
            }}>
              {item.isComplete ? "Revert" : "Complete"}
            </button></>
        })}
      </ul>
    </>
  )
}

function Header() {
  return (
    <h1>Todo list</h1>
  )
}

function App() {
  return (
    <>
      <Header />
      <TodoList />
    </>
  )
}

export default App
