import { useDispatch } from 'react-redux'
import { CheckMarkIcon } from 'shared/icons'
import { Task } from 'shared/types'

import { updateTaskCompleted } from '..'
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
      onClick={() => dispatch(updateTaskCompleted(id))}
      className={styles.iconWrapper}>
      {isCompleted ? (
        <CheckMarkIcon color="green" width={24} height={24} />
      ) : (
        <CheckMarkIcon width={24} height={24} />
      )}
    </div>
  )
}
