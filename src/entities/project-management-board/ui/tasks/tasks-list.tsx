import { useSelector } from 'react-redux'
import { RootState } from 'app/store'

import { TasksItem } from './tasks-item'

export const TasksList = () => {
  const { tasks } = useSelector((state: RootState) => state.createTask)

  return tasks.map((task, i) => <TasksItem title={task.title} index={i} />)
}
