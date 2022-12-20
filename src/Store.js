import { configureStore } from '@reduxjs/toolkit'
import accReducer  from './Slices/Bankslice'

export const store = configureStore({
  reducer: {
    accSlice : accReducer,
  },
})