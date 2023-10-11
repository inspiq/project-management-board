import { useSelector } from 'react-redux'
import { RootState } from 'app/store'
import { TaskCreateButton } from 'features/task-create'
import { UiInput } from 'shared/ui'
import { TaskColumn } from 'widgets/task-column'
import { TasksList } from 'widgets/tasks'

import { Layout } from './layout/layout'

export const HomePage = () => {
  const { isShowFieldCreateTask } = useSelector(
    (state: RootState) => state.input,
  )

  //const { tasks } = useSelector((state: RootState) => state.task.tasks)

  return (
    <Layout>
      <TaskColumn title="Задачи">
        <TaskCreateButton />
        {isShowFieldCreateTask && <UiInput />}
        <TasksList />
      </TaskColumn>
      <TaskColumn title="В разработке" />
      <TaskColumn title="Выполненные" />
    </Layout>
  )
}
