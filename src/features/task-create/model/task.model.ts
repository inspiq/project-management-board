import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from 'app/types'

interface InitialState {
  tasks: Task[]
}

const initialState: InitialState = {
  tasks: [],
}

export const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    updateTaskStatus: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload)

      if (!task) {
        return
      }

      task.isCompleted = !task.isCompleted
    },
  },
})

export const { createTask, updateTaskStatus } = taskSlice.actions
export const taskReducer = taskSlice.reducer
