import React, { useContext } from "react";
import TodoContext from "../../context/Todo";

const AddNewTask = () => {
  const { handleCreteNewTodo, state, handleTodoInput } = useContext(
    TodoContext,
  );
  return (
    <div className='addNewTask'>
      <form onSubmit={handleCreteNewTodo}>
        <input
          type='text'
          placeholder='باز دیگه امروز میخوای چیکار کنی؟'
          value={state.todo}
          onChange={handleTodoInput}
        />
        <button type='submit'>ADD</button>
      </form>
    </div>
  );
};

export default AddNewTask;
