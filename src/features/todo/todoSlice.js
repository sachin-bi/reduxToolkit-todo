import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

export const todoSlice = createSlice({
    name: "todo_supermanSlice",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => action.payload != todo.id);
        },
    },
}) 

//individual reducers export for use in components
export const {addTodo, removeTodo} = todoSlice.actions

//all together reducers export for store.js to acknowledge
export default todoSlice.reducer