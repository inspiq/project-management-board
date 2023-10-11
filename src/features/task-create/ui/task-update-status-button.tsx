import { useDispatch } from 'react-redux'
import { CheckMarkIcon } from 'shared/icons'

import { updateTaskStatus } from '..'
import styles from './styles.module.css'

interface TaskUpdateStatusButtonProps {
  id: string
  isCompleted: boolean
}

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
