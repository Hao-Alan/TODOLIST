import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  memberList: [{
    id: '1', name: 'ANH HUNG', picture: 'https://i.pravatar.cc/150?u=anh', content: 'Chào tất cả mọi người nhé!'
  }],

  num: 1,

  burgerList: {
    Salad: 1, Cheese: 3, Beef: 1
  },
  menu: {
    Salad: 10, Cheese: 20, Beef: 85
  },
  total: 85


};

export const counterSliceXXX = createSlice({
  name: 'counterxxx',
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

export const { increment, decrement, incrementByAmount, addToList, handleIncrease } = counterSliceXXX.actions;

export const selectBurger = (state) => state.counterxxx;


export default counterSliceXXX.reducer;
