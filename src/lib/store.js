import { configureStore } from '@reduxjs/toolkit';

import { basketSlice } from './basketSlice';


export default () => {
  return configureStore({
    reducer: {
      
      basket: basketSlice.reducer,
     
    },
  });
};