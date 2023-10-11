import { useSelector } from 'react-redux'
import { RootState } from 'app/store'

import { TasksItem } from './tasks-item'

export const TasksList = () => {
  const { tasks } = useSelector((state: RootState) => state.task)

  return tasks.map((task) => <TasksItem key={task.id} {...task} />)
}
