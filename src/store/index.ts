import { configureStore } from '@reduxjs/toolkit';
import  cardreducer from './card';
import  tokenreducer from './token';

export default configureStore({
  reducer: {
    card:cardreducer,
    token:tokenreducer
  },
});