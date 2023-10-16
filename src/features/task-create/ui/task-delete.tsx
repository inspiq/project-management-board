import { useDispatch } from 'react-redux'
import { DeleteIcon } from 'shared/icons'

import { deleteTask } from '..'
import styles from './styles.module.css'

export const TaskDelete = ({ id }: { id: string }) => {
  const dispatch = useDispatch()

  const handleTaskDelete = () => {
    dispatch(deleteTask(id))
  }

  return (
    <div className={styles.menuItemContainer} onClick={handleTaskDelete}>
      <DeleteIcon width={16} height={16} />
      <div>Удалить</div>
    </div>
  )
}
