import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  memberList: [{
    id: '1', name: 'ANH HUNG', picture: 'https://i.pravatar.cc/150?u=anh', content: 'Chào tất cả mọi người nhé!'
  }],

  num: 1,

  burgerList: [
    { name: "BurgerUp", quantity: 1, },
    { name: "Salad", quantity: 1, },
    { name: "Salad", quantity: 1, },
    { name: "Cheese", quantity: 1, },
    { name: "Cheese", quantity: 1, },
    { name: "Beef", quantity: 1, },
    { name: "BurgerDown", quantity: 1, },
  ]
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

    handleIncrease: (state, action) => {
      let newList = [...state.burgerList]
      // const nnn = { name: action.payload, id: 1 }
      // const newAddedList = newList.push(nnn)
      // state.burgerList = [...state.burgerList, nnn]
      // let newItem = newList.find(food => food.name === action.payload)
      console.log('payload', action.payload);

      // state.burgerList = [...state.burgerList, newItem]
      state.burgerList.push({ name: action.payload, id: 1 })
    }

  },
});

export const { increment, decrement, incrementByAmount, addToList, handleIncrease } = counterSliceXXX.actions;

export const selectBurger = (state) => state.counterxxx.burgerList;


export default counterSliceXXX.reducer;
