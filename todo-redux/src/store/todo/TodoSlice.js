import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [{id: 1, text: 'Learn Redux'}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id: nanoid(), text: action.payload})
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            todo.text = action.payload.text
        },
    },
})

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer