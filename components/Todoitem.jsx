import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoitemContext } from "../src/store/To-doitems";
function Todoitem({ message, date }) {
  const { deleteItem } = useContext(TodoitemContext);
  return (
    <div className="container todoitem">
      <div className="row">
        <div className="col-6">{message}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todobtn"
            onClick={() => deleteItem(message)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
