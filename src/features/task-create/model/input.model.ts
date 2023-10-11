import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  inputValue: string
  isShowFieldCreateTask: boolean
}

const initialState: InitialState = {
  inputValue: '',
  isShowFieldCreateTask: false,
}

export const inputSlice = createSlice({
  name: 'inputSlice',
  initialState,
  reducers: {
    onChangeValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload
    },
    showField: (state) => {
      state.isShowFieldCreateTask = true
    },
    hideField: (state) => {
      state.isShowFieldCreateTask = false
    },
  },
})

export const { onChangeValue, showField, hideField } = inputSlice.actions
export const inputReducer = inputSlice.reducer
