import { useDispatch } from 'react-redux'
import { UiButton } from 'shared/ui'

import { showField } from '..'

export const TaskCreateButton = () => {
  const dispatch = useDispatch()

  return (
    <UiButton
      onClick={() => {
        dispatch(showField())
      }}>
      Добавить задачу
    </UiButton>
  )
}
