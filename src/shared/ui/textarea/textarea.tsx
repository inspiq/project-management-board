import { ChangeEvent, KeyboardEventHandler, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTask } from 'features/task'
import { Status } from 'shared/types'
import { v4 as uuidv4 } from 'uuid'

import styles from './styles.module.css'

export const UiTextArea = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const payload = {
    id: uuidv4(),
    title: value,
    status: Status.NEW,
    isCompleted: false,
  }

  const resetInputValueAndCreateTask = () => {
    if (value && value.trim()) {
      dispatch(createTask(payload))
      setValue('')
    }
  }

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setValue(value)
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
      value={value}
      onKeyUp={onKeyUp}
      onBlur={onBlur}
      placeholder="Напишите текст задачи..."
    />
  )
}
