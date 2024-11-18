import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="items-container">
      {todoItems.map((items) => (
        <TodoItem
          key={items.todoname}
          todoName={items.todoname}
          todoDate={items.duedate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
