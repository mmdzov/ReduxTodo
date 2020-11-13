import {createContext} from "react"

const TodoContext = createContext({
    state: [],
    handleCreteNewTodo: () => {},
    handleTodoInput: () => {},
    handleCompleteTodo: () => {},
    handleDeleteTodo: () => {},
    handleUndo: () => {},
    handleClearTrash: () => {},
    handleUndoAll: () => {}
})

export default TodoContext;