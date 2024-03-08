import { configureStore } from '@reduxjs/toolkit'
import toDosReducer from './todos/reducer'

const store = configureStore({
  reducer: {
    toDos: toDosReducer,
  },
})

export default store
