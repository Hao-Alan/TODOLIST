import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  memberList: [{
    id: '1', name: 'ANH HUNG', picture: 'https://i.pravatar.cc/150?u=anh', content: 'Chào tất cả mọi người nhé!'
  }],

  num: 1,

  burgerList: [
    { name: "BurgerUp", quantity: 1, },
    { name: "Salad", quantity: 1, },
    { name: "Cheese", quantity: 1, },
    { name: "Beef", quantity: 1, },
    { name: "BurgerDown", quantity: 1, },
  ]
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },


    addToList: (state, action) => {
      state.memberList = [...state.memberList, action.payload]
    },


  },
});

export const { increment, decrement, incrementByAmount, addToList, handleIncrease } = counterSlice.actions;

export const selectCount = (state) => state.counter.memberList;


export default counterSlice.reducer;
