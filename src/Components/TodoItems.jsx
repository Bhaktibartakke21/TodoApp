import React from "react";
import TodoItem from "./TodoItem";


const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id} // Add a unique key prop here
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
