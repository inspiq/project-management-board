import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createTaskReducer } from 'features/task-create/model/create.model'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  createTask: createTaskReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['createTask'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
