import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { taskReducer } from 'features/task'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  task: taskReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['task'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
