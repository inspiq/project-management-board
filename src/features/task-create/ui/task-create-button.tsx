import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'app/store/store'
import { UiButton } from 'shared/ui/button'

import { incrementByAmount } from '../model/create.model'

export const TaskCreateButton = () => {
  const dispatch = useDispatch()
  const value = useSelector((state: RootState) => state.createTask.value)

  return (
    <UiButton onClick={() => dispatch(incrementByAmount(5))}>
      Добавить задачу {value}
    </UiButton>
  )
}
