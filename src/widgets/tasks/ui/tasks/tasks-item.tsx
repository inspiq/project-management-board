import { memo } from 'react'
import { useDrag } from 'react-dnd'
import { TaskUpdateStatusButton } from 'features/task-create'
import { Task } from 'shared/types'

import styles from './styles.module.css'

interface TasksItemProps extends Task {}

export const TasksItem = memo(({ title, id, isCompleted }: TasksItemProps) => {
  const [, drag] = useDrag(() => ({
    type: 'task',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div className={styles.taskWrapper} ref={drag}>
      <div className={styles.taskContent}>
        <TaskUpdateStatusButton id={id} isCompleted={isCompleted} />
        <div className={styles.taskTitle}>{title}</div>
      </div>
      {isCompleted && <div className={styles.taskOverlay}></div>}
    </div>
  )
})
