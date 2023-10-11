import { memo } from 'react'
import { useDrag } from 'react-dnd'
import { Task } from 'app/types'
import { TaskUpdateStatusButton } from 'features/task-create'

import styles from './styles.module.css'

interface TasksItemProps extends Task {}

export const TasksItem = memo(({ title, id, isCompleted }: TasksItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div className={styles.taskWrapper} ref={drag}>
      <div className={styles.taskContent}>
        <TaskUpdateStatusButton id={id} isCompleted={isCompleted} />
        <div>{title}</div>
      </div>
      {isCompleted && <div className={styles.taskOverlay}></div>}
    </div>
  )
})
