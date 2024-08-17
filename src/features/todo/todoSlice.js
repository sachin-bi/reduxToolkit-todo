import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "buy pens"
        }
    ]
}

export const todoSlice = createSlice({
    // name: 'todo_superman', 
    name: 'todo,',
    initialState,
    reducers: {
        addTodo: (state, action) => {
           const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            // state.todos.filter(action.payload.id);
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            //  APPROACH 1
            // todo = {
            //     id:action.payload.id,
            //     text:action.payload.text
            // }
            // removeTodo(action.payload.id);
            // addTodo(todo);

            //  APPROACH 2 (good)
            state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text
                }
            })

            //  APPROACH 3 ()
            // const updatedTodo = { ...state.todos.find(todo => todo.id === action.payload.id), text: action.payload.text };
            // state.todos = [...state.todos.filter(todo => todo.id !== action.payload.id), updatedTodo];

        }
    }
})


// syntax to export functionallity 
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions


// syntax to export functionallity for store givve access to (addTodo, removeTodo, updateTodo) to manipulate data
export default todoSlice.reducer

