import { useContext, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { TodoitemContext } from "../src/store/To-doitems";

function Addtodo() {
  const { addNewitem } = useContext(TodoitemContext);
  const [newItem, setnewItem] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handlenamechange = (event) => {
    setnewItem(event.target.value);
  };
  const handleDatechange = (event) => {
    setdueDate(event.target.value);
  };

  const onItemAdded = () => {
    if (newItem !== "" && dueDate !== "") {
      addNewitem(newItem, dueDate);
      setnewItem("");
      setdueDate("");
    }
  };
  return (
    <div className="container todoitem">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To-Do Here"
            onChange={handlenamechange}
            value={newItem}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDatechange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success todobtn"
            onClick={onItemAdded}
          >
            <MdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
