import { createSlice } from '@reduxjs/toolkit';
import { REGIMES } from 'constants/constants';

const todoSlice = createSlice({
  name: 'todo',
  initialState: { items: [], deletedItems: [], regime: REGIMES.ACTUAL },
  reducers: {
    addTodo: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    deleteTodo: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
    addDeletedTodo: (state, { payload }) => {
      state.deletedItems = [...state.deletedItems, payload];
    },
    deleteDeletedTodo: (state, { payload }) => {
      state.deletedItems = state.deletedItems.filter(
        item => item.id !== payload
      );
    },
    switchRegimes: (state, { payload }) => {
      console.log(payload);
      state.regime = payload;
    },
  },
});

export default todoSlice.reducer;
export const {
  addTodo,
  deleteTodo,
  addDeletedTodo,
  deleteDeletedTodo,
  switchRegimes,
} = todoSlice.actions;
