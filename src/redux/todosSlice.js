import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {},
  reducers: {
    addTodo(state, action) {
      const { date, description } = action.payload;

      if (state[date]) {
        state[date].push({id: uuidv4(), description, completed: false})
      } else {
        state[date] = [{id: uuidv4(), description, completed: false}]
      }
    },
    updateTodo(state, action) {
      const { date, description, id } = action.payload;

      state[date].forEach(todo => {
        if (todo.id === id) {
          todo.description = description
        }
      });
    },
    // deleteTodo(state, action) {

    // }
  }
})

export const { addTodo, updateTodo } = todosSlice.actions

export default todosSlice.reducer