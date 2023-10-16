import { memo } from 'react'
import { useDrag } from 'react-dnd'
import { TaskControl, TaskUpdateStatusButton } from 'features/task-create'
import { useToggle } from 'shared/hooks'
import { Task } from 'shared/types'
import { Menu } from 'widgets/menu'

import styles from './styles.module.css'

interface TasksItemProps extends Task {}

export const TasksItem = memo(({ title, id, isCompleted }: TasksItemProps) => {
  const { toggle, isVisible } = useToggle()

  const [, drag] = useDrag(() => ({
    type: 'task',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div className={styles.taskWrapper}>
      <div className={styles.taskContainer} ref={drag}>
        <div className={styles.taskContent}>
          <TaskUpdateStatusButton id={id} isCompleted={isCompleted} />
          <div className={styles.taskTitle}>{title}</div>
          <TaskControl toggle={toggle} />
        </div>
        {isCompleted && <div className={styles.taskOverlay}></div>}
      </div>
      {isVisible && <Menu id={id} />}
    </div>
  )
})
