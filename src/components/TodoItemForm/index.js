import { useState } from "react";

export default function TodoItemForm({ }) {
  const [ todoState, setTodoState ] = useState([]);
  const [ formState, setFormState ] = useState({ text: "" });

  const handleOnChange = (event) => {
    event.preventDefault();
    setFormState((formState) => ({
      ...formState,
      [event.target.name]: event.target.value,
    }));
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setTodoState(todoState => [ ...todoState, { ...formState, isDone: false } ]);
    setFormState({ text: "" });
  }
    
    return (
        <div>
          <form onSubmit={handleOnSubmit}>
          <input name="text" type="text" placeholder="Item text" onChange={handleOnChange} value={formState.text} />
          <button type="submit">Add item</button>
          </form>
      </div>
    )
}