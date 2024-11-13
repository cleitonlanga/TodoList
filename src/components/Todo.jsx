import React from "react";

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <div>
      <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <div className="content">
          <p>Tarefa: {todo.text}</p>
        </div>
        <div className="category">
          <p>Categoria: {todo.category}</p>
        </div>
        <div className="buttons">
          <button className="completed" onClick={() => completeTodo(todo.id)}>Completar</button>
          <button className="delete" onClick={() => deleteTodo(todo.id)}>Excluir</button>
          <button className="edit">Editar</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
