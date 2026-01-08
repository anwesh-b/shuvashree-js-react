import { useState } from 'react'
import './App.css'

function TodoList() {
  // TODO: Store in state.
  const todoList = [
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
  ]

  return (
    <ul>
      {todoList.map(item => {
        return <li>{item.name}</li>
      })}
    </ul>
  )
}

function Header() {
  return (
    <h1>Todo list</h1>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => {
        setCount(count => count + 1)
      }}>
        Click here
      </button>
      <h1>Count: {count}</h1>
      <Header />
      <TodoList />
    </>
  )
}

export default App
