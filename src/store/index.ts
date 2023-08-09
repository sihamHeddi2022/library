import { configureStore } from '@reduxjs/toolkit';
import  cardreducer from './card';

export default configureStore({
  reducer: {
    card:cardreducer
  },
});