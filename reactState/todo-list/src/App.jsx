import { useState, useEffect } from 'react'
import "./styles.css";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList.jsx'

function App() {
  const [todos,setTodos] = useState([]);
  const addTodo = (e) => {
    const newTodo = { text: e.target.value, id: Date.now(), completed: false }
    setTodos([newTodo, ...todos])
    e.target.value = ""
  }
  const completeTodo = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
    setTodos([...todosCopy])
  }
  const editTodoText = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].text = e.target.value
    setTodos([...todosCopy])
    e.target.value = ""
  }

  const deleteTodo = (id) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy.splice(indexOfTodo, 1)
    setTodos([...todosCopy])
  };
  return (
    < div className= "App">
      <h1>App</h1>
      <TodoList
      todos={todos}
      addTodo={addTodo}
      completeTodo={completeTodo}
      editTodoText={editTodoText}
      deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App






