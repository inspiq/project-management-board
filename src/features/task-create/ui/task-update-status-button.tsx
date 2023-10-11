import { useDispatch } from 'react-redux'
import { Task } from 'app/types'
import { CheckMarkIcon } from 'shared/icons'

import { updateTaskStatus } from '..'
import styles from './styles.module.css'

interface TaskUpdateStatusButtonProps
  extends Pick<Task, Exclude<keyof Task, 'title' | 'status'>> {}

export const TaskUpdateStatusButton = ({
  id,
  isCompleted,
}: TaskUpdateStatusButtonProps) => {
  const dispatch = useDispatch()

  return (
    <div
      onClick={() => dispatch(updateTaskStatus(id))}
      className={styles.iconWrapper}>
      {isCompleted ? (
        <CheckMarkIcon color="green" width={24} height={24} />
      ) : (
        <CheckMarkIcon width={24} height={24} />
      )}
    </div>
  )
}
