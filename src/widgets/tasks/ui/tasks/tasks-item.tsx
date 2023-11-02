import { memo } from 'react'
import { useDrag } from 'react-dnd'
import { ControlTask, UpdateStatusTask } from 'features/task'
import { useToggle } from 'shared/hooks'
import { Task } from 'shared/types'
import { Menu } from 'widgets/menu'

import styles from './styles.module.css'

interface TasksItemProps extends Task {
  index: number
}

export const TasksItem = memo(
  ({ title, id, isCompleted, index }: TasksItemProps) => {
    const { toggle, isVisible, close } = useToggle()

    const [, drag] = useDrag(() => ({
      type: 'task',
      item: { id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }))

    const handleCloseMenu = () => {
      close()
    }

    return (
      <div style={{ marginTop: index !== 0 ? 10 : 0 }}>
        <div className={styles.taskWrapper} ref={drag}>
          <div className={styles.taskContainer}>
            <div className={styles.taskContent}>
              <UpdateStatusTask id={id} isCompleted={isCompleted} />
              <div className={styles.taskTitle}>{title}</div>
              <ControlTask toggle={toggle} />
            </div>
            {isCompleted && <div className={styles.taskOverlay}></div>}
          </div>
          {isVisible && <Menu id={id} isVisible={isVisible} />}
        </div>
        {isVisible && (
          <div className={styles.menuWrapper} onClick={handleCloseMenu}></div>
        )}
      </div>
    )
  },
)
