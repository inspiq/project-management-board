import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ColumnTitles, Status, Task } from 'shared/types'

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
    updateTaskCompleted: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload)

      if (!task) {
        return
      }

      task.isCompleted = !task.isCompleted
    },
    addItemToColumn: (
      state,
      action: PayloadAction<{ id: string; title: string }>,
    ) => {
      const { id, title } = action.payload

      const task = state.tasks.find((task) => {
        if (task.id === id) {
          return task
        }
      })

      if (!task) {
        return
      }

      const status: { [key: string]: Status } = {
        [ColumnTitles.TASKS]: Status.NEW,
        [ColumnTitles.IN_PROGRESS]: Status.IN_PROGRESS,
        [ColumnTitles.COMPLETED]: Status.COMPLETED,
      }

      task.status = status[title]
    },
  },
})

export const { createTask, updateTaskCompleted, addItemToColumn } =
  taskSlice.actions
export const taskReducer = taskSlice.reducer
