import { useDispatch } from 'react-redux'
import { UiButton } from 'shared/ui'

import { showField } from '..'

export const TaskCreateButton = () => {
  const dispatch = useDispatch()

  const showFieldCreateTask = () => {
    dispatch(showField())
  }

  return <UiButton onClick={showFieldCreateTask}>Добавить задачу</UiButton>
}
