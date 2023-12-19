import { useEffect, useState } from "react";
import "../styles/todo.css";

type Item = {
  id: string;
  item: String;
  completed: boolean;
};

function ToDo() {
  // A hook
  // const [todos, setTodos] = useState([] as Item[]);
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  // A hook
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);

  // Update a todo as completed
  function handleTodoComplete(id: string, completed: boolean) {
    setTodos((currentTodos: Item[]) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          /* 
            { ...todo, completed } adds or overrides the completed 
            property in the new object. If the completed property 
            already exists in the original todo object, its value
            will be replaced with the new value passed as an 
            argument to the function (completed parameter). If the
            completed property not in the object, it will create a
            new property and assign null value.
          */
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  // Remove deleted todo from todos array
  function handleTodoDelete(id: string) {
    /* 
      Hooks are immutable, so we can't change the value of a hook.
      only we can do is, create a new hook from existing one with
      the changes and set new hook to the reference.
    */
    setTodos((currentTodos: Item[]) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="todo">
      <form className="form-group">
        <input type="text" id="txtTask" className="form-control" />
        <button
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault(); // Prevent reloading page

            const txtTask = document.getElementById(
              "txtTask"
            ) as HTMLInputElement;

            if (txtTask.value != "") {
              setTodos((currentTodos: Item[]) => {
                return [
                  ...currentTodos,
                  {
                    id: crypto.randomUUID(),
                    item: txtTask.value,
                    completed: false,
                  },
                ];
              });
            }
          }}
        >
          Add
        </button>
      </form>

      <h1>ToDo List</h1>

      {todos.length === 0 && "No ToDos created."}
      <ul className="list-group">
        {todos.map((todo: Item) => (
          <li key={todo.id} className="list-group-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(event) =>
                handleTodoComplete(todo.id, event.target.checked)
              }
            />
            {todo.item}
            <button
              className="btn btn-danger"
              onClick={() => handleTodoDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
