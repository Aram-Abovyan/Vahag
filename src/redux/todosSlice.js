import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {},
  reducers: {
    addTodo(state, action) {
      const { date, description } = action.payload;

      if (state[date]) {
        state[date].push({description, completed: false})
      } else {
        state[date] = [{description, completed: false}]
      }
    }
  }
})

export const { addTodo } = todosSlice.actions

export default todosSlice.reducer