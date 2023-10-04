import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Task {
  title: string
}

interface InitialState {
  tasks: Task[]
}

const initialState: InitialState = {
  tasks: [],
}

export const createTaskSlice = createSlice({
  name: 'createTaskSlice',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
  },
})

export const { createTask } = createTaskSlice.actions
export const createTaskReducer = createTaskSlice.reducer
