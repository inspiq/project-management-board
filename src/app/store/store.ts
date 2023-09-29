import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createTaskReducer } from 'features/task-create/model/create.model'

const rootReducer = combineReducers({
  createTask: createTaskReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
