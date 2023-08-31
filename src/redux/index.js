import { configureStore, createSlice } from "@reduxjs/toolkit";                                                                 
const arr = [];                                                                 
                                                                 
const mainSlice = createSlice({                                                                 
  name: "todo",                                                                 
  initialState: {                                                                 
    todos: arr,                                                                 
  },                                                                 
  reducers: {                                                                 
    addTodo: (state, action) => {                                                                 
      state.todos.push({                                                                 
        title: action.payload,                                                                 
        status: false,                                                                 
        id: Date.now(),                                                                 
      });                                                                 
    },                                                                 
    deleteTodo: (state, action) => {                                                                 
      const newarr = state.todos.filter((item) => item.id !== action.payload);                                                                 
      state.todos = newarr;                                                                 
    },                                                                 
    changeStatus: (state, action) => {                                                                 
      const newArr = state.todos.map((item) => {                                                                 
        if (item.id === action.payload) {                                                                 
          return { ...item, status: !item.status };                                                                 
        }                                                                 
        return item;                                                                 
      });                                                                 
      state.todos = newArr;                                                                 
    },                                                                 
    editTodo: (state, action) => {                                                                 
      const newArr = state.todos.map((item) => {                                                           
        if (item.id === action.payload.id) {                                                                 
          return { ...item, title: action.payload.newStr };                                                                 
        }                                                                 
        return item;                                                                 
      });                                                                 
      state.todos = newArr;                                                                 
    },                                                                 
  },                                                                 
});                                                                 
                                                                 
export const { addTodo, deleteTodo, changeStatus, editTodo } =                                                                 
  mainSlice.actions;                                                                 
                                                                 
const store = configureStore({                                                                 
  reducer: mainSlice.reducer,                                                                 
});                                                                 
                                                                 
export default store;                                                                 
