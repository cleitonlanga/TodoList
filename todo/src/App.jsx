import { useState } from "react";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/filter";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar ReactJS",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodo);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    setTodos(newTodos);
  };

  return (
    <>
      <div className="App">
        <h1>Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />
        <div className="todo-list">
          {todos
            .filter((todo) =>
              filter === "All"
                ? true
                : filter === "Completed"
                ? todo.isCompleted
                : !todo.isCompleted
            )
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLocaleLowerCase())
            )
            .sort((a, b) =>
              sort === "Asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
              />
            ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </>
  );
}

export default App;
