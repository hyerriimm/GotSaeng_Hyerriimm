import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {
        id: 1,
        writer: '이혜림',
        title: '리덕스 툴킷 완료하기',
        body: '오늘까지 리덕스 툴킷 활용을 완료한다!!',
      },
    ],
  },
  reducers: {
    createTodo(state, action) {
      state.todos.push(action.payload);
    },

    deleteTodo(state, action) {
      let index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    },

    updateTodo(state, action) {
      let index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos.splice(index, 1, action.payload);
    },
  },
});

export let { createTodo, deleteTodo, updateTodo } = todos.actions;

export default todos;
