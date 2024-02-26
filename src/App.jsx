import AppName from "../components/AppName";
import Addtodo from "../components/Addtodo";

import Todoitems from "../components/Todoitems";
import "../src/App.css";
import { useState } from "react";
import Welcomemes from "../components/Welcomemes";
import { TodoitemContext } from "./store/To-doitems";

function App() {
  const [todoitems, settodoitems] = useState([]);

  const addNewitem = (itemName, duedate) => {
    const newtodoitems = [
      ...todoitems,
      { message: itemName, duedate: duedate },
    ];
    settodoitems(newtodoitems);
  };

  const deleteItem = (todoitemname) => {
    const newtodoitem = todoitems.filter(
      (item) => item.message !== todoitemname
    );
    settodoitems(newtodoitem);
  };

  return (
    <TodoitemContext.Provider
      value={{
        todoitems,
        addNewitem,
        deleteItem,
      }}
    >
      <center className="Todo-container ">
        <AppName></AppName>
        <Addtodo></Addtodo>
        <Welcomemes />
        <Todoitems />
      </center>
    </TodoitemContext.Provider>
  );
}

export default App;
