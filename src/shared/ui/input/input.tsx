import { ChangeEvent, KeyboardEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'app/store'
import { createTask, onChangeValue } from 'features/task-create'
import { Status } from 'shared/types'
import { v4 as uuidv4 } from 'uuid'

import styles from './styles.module.css'

export const UiInput = () => {
  const { inputValue } = useSelector((state: RootState) => state.input)
  const dispatch = useDispatch()

  const payload = {
    id: uuidv4(),
    title: inputValue,
    status: Status.NEW,
    isCompleted: false,
  }

  const resetInputValueAndCreateTask = () => {
    if (inputValue) {
      dispatch(createTask(payload))
      dispatch(onChangeValue(''))
    }
  }

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    dispatch(onChangeValue(value))
  }

  const handleKeyPress: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter') {
      resetInputValueAndCreateTask()
    }
  }

  const onBlur = () => {
    resetInputValueAndCreateTask()
  }

  return (
    <textarea
      className={styles.input}
      onChange={onChange}
      value={inputValue}
      onKeyUp={handleKeyPress}
      onBlur={onBlur}
      placeholder="Напишите текст задачи..."
    />
  )
}
