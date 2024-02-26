import React, { useContext } from "react";
import { TodoitemContext } from "../src/store/To-doitems";

export default function Welcomemes() {
  const { todoitems } = useContext(TodoitemContext);
  return (
    todoitems.length === 0 && (
      <p>
        <strong>----------Enjoy your Day---------------</strong>{" "}
      </p>
    )
  );
}
