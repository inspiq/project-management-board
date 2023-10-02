import { useSelector } from 'react-redux'
import { RootState } from 'app/store/store'
import { TaskCreateButton } from 'features/task-create'

import styles from './styles.module.css'

interface TaskColumnProps {
  title: string
  isShowButton?: boolean
}

export const TaskColumn = ({ title, isShowButton }: TaskColumnProps) => {
  const tasks = useSelector((state: RootState) => state.createTask.tasks)

  return (
    <div className={styles.taskColumn}>
      <div className={styles.title}>{title}</div>
      {isShowButton && <TaskCreateButton />}
      {tasks.map((task) => (
        <div>{task.title}</div>
      ))}
    </div>
  )
}
