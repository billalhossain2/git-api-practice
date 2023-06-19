import React, { useState } from 'react'
const Form = (props) => {
  const {editableTodo, setEditableTodo, todoTitle, todos, setTodos, setTodoTitle} = props;
    const handleAddTodo = (ev) => {
        props.setTodos([...props.todos, {id: Date.now(), title: props.todoTitle, completed: false}]);
        props.setTodoTitle("");
    }

    const handleUpdateTodo = (ev) => {
      const updatableTodos = [...todos];
      updatableTodos.forEach(todo => {
        if(todo.id === editableTodo.id){
          todo.title = todoTitle;
        }
      })
      setTodos(updatableTodos);
      setEditableTodo(null);
      setTodoTitle("");
    }

    const handleSubmit = (ev) => {
      ev.preventDefault();
      if(!todoTitle)return alert("Please input todo")
      !editableTodo ? handleAddTodo(ev) : handleUpdateTodo(ev);
    }
    
  return (
    <form action="#" onSubmit={handleSubmit}>
        <input 
        onChange={(ev)=>props.setTodoTitle(ev.target.value)} 
        value={props.todoTitle}
        type="text" />
        <button>{editableTodo ? "Update" : "Add Todo"}</button>
    </form>
  )
}

export default Form