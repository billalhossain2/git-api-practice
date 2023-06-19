import React from 'react'
import Todo from './Todo'
const Todos = (props) => {
  return (
    <ul>
        {
            props.todos.map(todo => <Todo key={todo.id} todo={todo} todos={props.todos} setTodos={props.setTodos} todoTitle={props.todoTitle} setTodoTitle={props.setTodoTitle} editalbeTodo={props.editableTodo} setEditableTodo={props.setEditableTodo}/>)
        }
    </ul>
  )
}

export default Todos