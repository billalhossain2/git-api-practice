import React from 'react'

const Todo = (props) => {

  const handleDeleteTodo = (id, title) =>{
   const isDelete = window.confirm(`Are you sure to delete "${title}"?`);
   if(!isDelete) return;
   const filteredTodos = props.todos.filter(todo => todo.id !== id);
   props.setTodos(filteredTodos);
  }

const handleCompleteTodo = id => {
  const todos = [...props.todos]
  const toggleTodo = todos.find(todo => todo.id === id);
  toggleTodo.completed = !toggleTodo.completed;
  props.setTodos(todos)
}

const handleEditTodo = id => {
  const editableTodo = props.todos.find(todo => todo.id === id);
  props.setTodoTitle(editableTodo.title);
  props.setEditableTodo(editableTodo)
}
  return (
    <li>
        <button onClick={()=>handleCompleteTodo(props.todo.id)}>{props.todo.completed ? "Incomplete" : "Complete"}</button>
        <span style={props.todo.completed ? {color: 'green', textDecoration:'line-through'} : {}}>{props.todo.title}</span>
        <button onClick={()=>handleDeleteTodo(props.todo.id, props.todo.title)}>Delete</button>
        <button onClick={()=>handleEditTodo(props.todo.id)}>Edit</button>
    </li>
  )
}

export default Todo