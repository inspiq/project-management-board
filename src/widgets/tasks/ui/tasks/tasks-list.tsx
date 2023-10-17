import { Fragment } from 'react'
import { useDrop } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'app/store'
import { addItemToColumn } from 'features/task'
import { Status, Task } from 'shared/types'

import styles from './styles.module.css'
import { TasksItem } from './tasks-item'

interface TasksListProps {
  columnTitle: string
  status: Status
}

export const TasksList = ({ columnTitle, status }: TasksListProps) => {
  const dispatch = useDispatch()

  const { tasks } = useSelector((state: RootState) => state.task)

  const handleAddItemToColumn = (id: string) => {
    const payload = {
      id,
      title: columnTitle,
    }

    dispatch(addItemToColumn(payload))
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item: Task) => handleAddItemToColumn(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const cn = isOver
    ? `${styles.taskDrop} ${styles.taskDropActive}`
    : `${styles.taskDrop}`

  return (
    <div className={styles.tasksListWrapper}>
      {tasks?.map((task) => {
        if (task.status === status) {
          return (
            <Fragment key={task.id}>
              <TasksItem {...task} />
            </Fragment>
          )
        }
      })}
      <div ref={drop} className={cn}></div>
    </div>
  )
}
