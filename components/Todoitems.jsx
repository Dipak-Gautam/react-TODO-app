import { useContext } from "react";
import Todoitem from "../components/Todoitem";
import { TodoitemContext } from "../src/store/To-doitems";

function Todoitems() {
  const { todoitems } = useContext(TodoitemContext);
  return (
    <>
      {todoitems.map((item) => (
        <Todoitem
          key={item.message}
          message={item.message}
          date={item.duedate}
          
        />
      ))}
    </>
  );
}
export default Todoitems;
