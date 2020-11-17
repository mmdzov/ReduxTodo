import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput } from "../../store/actions/Todo";
import { createTodo } from "../../store/actions/Todos";

const AddNewTask = () => {
  const todo = useSelector(({ todo }) => todo);
  const dispatch = useDispatch();
  return (
    <div className='addNewTask'>
      <form onSubmit={(event) => dispatch(createTodo(event))}>
        <input
          type='text'
          placeholder='باز دیگه امروز میخوای چیکار کنی؟'
          value={todo}
          onChange={(event) => dispatch(changeInput(event))}
        />
        <button type='submit'>ADD</button>
      </form>
    </div>
  );
};

export default AddNewTask;
