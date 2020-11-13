import {createContext} from "react"

const TodoContext = createContext({
    todos: [],
    todo: '',
    handleCreteNewTodo: () => {},
    handleTodoInput: () => {},
    handleCompleteTodo: () => {},
    handleDeleteTodo: () => {}
})

export default TodoContext;