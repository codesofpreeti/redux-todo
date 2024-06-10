import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //props and functions
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      if(action.payload!=""){
        state.todos.push(todo);
      }
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  },
});

export const { addToDo, removeToDo } = TodoSlice.actions;
export default TodoSlice.reducer;
