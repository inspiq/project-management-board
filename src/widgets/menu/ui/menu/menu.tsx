import { TaskDelete } from 'features/task-create'

import styles from './styles.module.css'

export const Menu = ({ id }: { id: string }) => {
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuItem}>
        <TaskDelete id={id} />
      </div>
    </div>
  )
}
