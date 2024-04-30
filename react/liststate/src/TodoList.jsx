import React, { useState } from 'react'

function TodoList() {
  const [todos,setTodos] = useState([]);

  function handleList(event) {
    event.preventDefault();
    const newItem = event.target.addItem.value; // Get the value from the input field
    setTodos([...todos, newItem]); // Add the new item to the existing todos array
    event.target.addItem.value = ''; // Clear the input field after adding the item
  }

  function handleReset() {
    setTodos([]);
  }

  function handleDeleteElement(item) {
    const index = todos.indexOf(item); // Find the index of the first occurrence of the item
    const newTodos = [...todos]; // Create a copy of the todos array
    newTodos.splice(index, 1); // Remove the item at the found index
    setTodos(newTodos); // Update the todos state
  }

  return (
    <div>
      <ul>
        {todos.map((item,index) => {
            return <li key={index}>
              {item}
              <button onClick={() => handleDeleteElement(item)}>Reset element</button>
            </li>
        })}
      </ul>
      <form onSubmit={handleList}>
          <input name='addItem' type="text" />
          <button type="submit">Submit</button>
          <button onClick={handleReset} type="reset">Reset</button>
      </form>
    </div>
  )
}

export default TodoList
