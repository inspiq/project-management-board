import { ChangeEvent, KeyboardEventHandler, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'app/store'
import { createTask, onChangeValue } from 'features/task-create'

import styles from './styles.module.css'

export const UiInput = () => {
  const { inputValue } = useSelector((state: RootState) => state.input)
  const dispatch = useDispatch()

  const inputRef = useRef<HTMLInputElement>(null)

  const payload = {
    title: inputValue,
  }

  const resetInputValueAndCreateTask = () => {
    dispatch(createTask(payload))
    dispatch(onChangeValue(''))
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    dispatch(onChangeValue(value))
  }

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      resetInputValueAndCreateTask()
    }
  }

  const onBlur = () => {
    resetInputValueAndCreateTask()
  }

  return (
    <input
      ref={inputRef}
      className={styles.input}
      onChange={onChange}
      value={inputValue}
      onKeyUp={handleKeyPress}
      onBlur={onBlur}
    />
  )
}
