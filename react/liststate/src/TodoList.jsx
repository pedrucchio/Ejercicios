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
    const filteredTodos = todos.filter(todo => todo !== item);
    setTodos(filteredTodos);
  }

  return (
    <div>
      <ul>
        {todos.map((item) => {
            return <li>
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
