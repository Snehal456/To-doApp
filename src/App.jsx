import AppName from "./Components/AppName";
import TodoAdd from "./Components/TodoAdd";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const initialtodoItems = [
    {
      todoname: "Go to Collge",
      duedate: "12/10/2024",
    },
    {
      todoname: "Buy Milk",
      duedate: "13/10/2024",
    },
    {
      todoname: "Do Homework",
      duedate: "15/10/2024",
    },
    {
      todoname: "Take Assessment",
      duedate: "15/10/2024",
    },
  ];

  const [todoItems, settodoItems] = useState(initialtodoItems);

  const handlenewTodoItem = (itemname, duedate) => {
    // console.log(`New Item Added is : ${itemname} Date is : ${duedate}`);
    const newtodoitem = [
      ...todoItems,
      { todoname: itemname, duedate: duedate },
    ];
    settodoItems(newtodoitem);
  };

  const handledeleteItem = (itemname) => {
    // console.log(`${itemname} is deleted`);
    const newtodoitems = todoItems.filter((item) => item.todoname !== itemname);
    settodoItems(newtodoitems);
  };

  return (
    <div className="todoapp">
      <center className="to-do-app">
        <AppName />
        <TodoAdd onNewItem={handlenewTodoItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handledeleteItem}
        ></TodoItems>
      </center>
    </div>
  );
}

export default App;
