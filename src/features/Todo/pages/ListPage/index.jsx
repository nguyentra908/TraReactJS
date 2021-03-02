import React, { useEffect, useState } from "react";
import TodoList from "../../components/TodoList";
import queryString from "query-string";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import TodoForm from "../../components/TodoForm";

function ListPage(props) {
  const initTodoList = [
    { id: 1, title: "Tra", status: "new" },
    { id: 2, title: "Thao", status: "new" },
    { id: 3, title: "Nguyen", status: "new" },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterTodo, setFilterTodo] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    return params.status || "all";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);

    setFilterTodo(params.status || "all");
  }, [location.search]);

  function handleTodo(todo, index) {
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    console.log(todo, index);
    setTodoList(newTodoList);
  }
  const handleShowAll = () => {
    // setFilterTodo("all");
    const queryParams = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompleted = () => {
    // setFilterTodo("completed");
    const queryParams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNew = () => {
    // setFilterTodo("new");
    const queryParams = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderTodo = todoList.filter((todo) => filterTodo === "all" || filterTodo === todo.status);
  console.log(renderTodo);
  //todo form

  const handleSubmitForm = (values) => {
    console.log("submit:", values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: "new",
    };
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div>
      <p>Todo-Form</p>
      <TodoForm onsubmitTodo={handleSubmitForm} />
      <p>Todo-List</p>
      <TodoList todoList={renderTodo} onTodoClick={handleTodo} />
      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowCompleted}>Show Completed</button>
      <button onClick={handleShowNew}>Show New</button>
    </div>
  );
}

export default ListPage;
