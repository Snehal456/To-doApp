import { useState } from "react";
import { MdAddTask } from "react-icons/md";

function TodoAdd({ onNewItem }) {
  const [todoName, settodoName] = useState("");
  const [todoDate, settodoDate] = useState("");

  const handleNameChange = (event) => {
    settodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    settodoDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, todoDate);
    settodoName("");
    settodoDate("");
  };

  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter to do here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={todoDate} />
        </div>
        <div className="col-4">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClick}
          >
            {/* Add */}
            <MdAddTask />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoAdd;
