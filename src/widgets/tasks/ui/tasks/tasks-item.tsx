import { memo } from 'react'
import { Task } from 'app/types'
import { TaskUpdateStatusButton } from 'features/task-create'

import styles from './styles.module.css'

interface TasksItemProps extends Task {}

export const TasksItem = memo(({ title, isCompleted, id }: TasksItemProps) => (
  <div className={styles.taskWrapper}>
    <div className={styles.taskContent}>
      <TaskUpdateStatusButton id={id} isCompleted={isCompleted} />
      <div>{title}</div>
    </div>
    {isCompleted && <div className={styles.taskOverlay}></div>}
  </div>
))
