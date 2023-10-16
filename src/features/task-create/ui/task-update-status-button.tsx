import { useDispatch } from 'react-redux'
import { CheckMarkIcon } from 'shared/icons'
import { Task } from 'shared/types'

import { updateTaskCompleted } from '..'
import styles from './styles.module.css'

interface TaskUpdateStatusButtonProps
  extends Pick<Task, 'id' | 'isCompleted'> {}

export const TaskUpdateStatusButton = ({
  id,
  isCompleted,
}: TaskUpdateStatusButtonProps) => {
  const dispatch = useDispatch()

  const updateTaskStatus = () => {
    dispatch(updateTaskCompleted(id))
  }

  return (
    <div onClick={updateTaskStatus} className={styles.checkMarkIconWrapper}>
      {isCompleted ? (
        <CheckMarkIcon color="green" width={20} height={20} />
      ) : (
        <CheckMarkIcon width={20} height={20} />
      )}
    </div>
  )
}
