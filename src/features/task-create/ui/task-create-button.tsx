import { useDispatch } from 'react-redux'
import { UiButton } from 'shared/ui/button'

import { createTask } from '../model/create.model'

export const TaskCreateButton = () => {
  const dispatch = useDispatch()

  return (
    <UiButton
      onClick={() => {
        dispatch(createTask({ title: 'Task' }))
      }}>
      Добавить задачу
    </UiButton>
  )
}
