import { ChangeEvent, KeyboardEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'app/store'
import { createTask, onChangeValue } from 'features/task'
import { Status } from 'shared/types'
import { v4 as uuidv4 } from 'uuid'

import styles from './styles.module.css'

export const UiTextArea = () => {
  const { inputValue } = useSelector((state: RootState) => state.input)
  const dispatch = useDispatch()

  const payload = {
    id: uuidv4(),
    title: inputValue,
    status: Status.NEW,
    isCompleted: false,
  }

  const resetInputValueAndCreateTask = () => {
    if (inputValue && inputValue.trim()) {
      dispatch(createTask(payload))
      dispatch(onChangeValue(''))
    }
  }

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    dispatch(onChangeValue(value))
  }

  const onKeyUp: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
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
      onKeyUp={onKeyUp}
      onBlur={onBlur}
      placeholder="Напишите текст задачи..."
    />
  )
}
