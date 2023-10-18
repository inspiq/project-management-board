import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ColumnTitles, Status, Task } from 'shared/types'

interface InitialState {
  data: [Status, Task[]][]
}

const initialState: InitialState = {
  data: [
    [Status.NEW, []],
    [Status.IN_PROGRESS, []],
    [Status.COMPLETED, []],
  ],
}

export const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>) => {
      if (!state.data) {
        return
      }

      state.data[0][1].push(action.payload)
    },
    updateTaskCompleted: (state, action: PayloadAction<string>) => {
      const taskId = action.payload

      const tasksToUpdate = state.data.find(([, tasks]) =>
        tasks.find((task) => task.id === taskId),
      )

      if (!tasksToUpdate) {
        return
      }

      const [, tasks] = tasksToUpdate
      const task = tasks.find((task) => task.id === taskId)

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
      const tasksToTransfer = state.data.find(([, tasks]) =>
        tasks.find((task) => task.id === id),
      )

      if (!tasksToTransfer) {
        return
      }

      const [, tasks] = tasksToTransfer

      const task = tasks.find((task) => task.id === id)

      if (!task) {
        return
      }

      const status: { [key: string]: Status } = {
        [ColumnTitles.TASKS]: Status.NEW,
        [ColumnTitles.IN_PROGRESS]: Status.IN_PROGRESS,
        [ColumnTitles.COMPLETED]: Status.COMPLETED,
      }

      task.status = status[title]

      const tasksToUpdate = state.data.find(([, tasks]) =>
        tasks.find((task) => task.id === id),
      )

      if (!tasksToUpdate) {
        return
      }

      const [, oldTasks] = tasksToUpdate
      const oldTaskIndex = oldTasks.findIndex((task) => task.id === id)

      if (oldTaskIndex !== -1) {
        oldTasks.splice(oldTaskIndex, 1)
      }

      if (status[title] === Status.NEW) {
        state.data[0][1].push(task)
      }

      if (status[title] === Status.IN_PROGRESS) {
        state.data[1][1].push(task)
      }

      if (status[title] === Status.COMPLETED) {
        state.data[2][1].push(task)
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload

      const tasksToFilter = state.data.find(([, tasks]) =>
        tasks.find((task) => task.id === taskId),
      )

      if (!tasksToFilter) {
        return
      }

      const [statusTasks, tasks] = tasksToFilter

      const filteredTasks = tasks.filter((task) => task.id !== taskId)

      const filteredIndex = state.data.findIndex(
        ([status]) => status === statusTasks,
      )

      state.data.splice(filteredIndex, 1, [statusTasks, filteredTasks])
    },
    createSubtask: () => {},
  },
})

export const {
  createTask,
  updateTaskCompleted,
  addItemToColumn,
  deleteTask,
  createSubtask,
} = taskSlice.actions
export const taskReducer = taskSlice.reducer
