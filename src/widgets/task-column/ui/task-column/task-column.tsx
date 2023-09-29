import { TaskCreateButton } from 'features/task-create'

import styles from './styles.module.css'

interface TaskColumnProps {
  title: string
}

export const TaskColumn = ({ title }: TaskColumnProps) => (
  <div className={styles.taskColumn}>
    <div className={styles.title}>{title}</div>
    <TaskCreateButton />
  </div>
)
