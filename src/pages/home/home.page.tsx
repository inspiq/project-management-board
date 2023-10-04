import { useSelector } from 'react-redux'
import { RootState } from 'app/store'
import { TaskCreateButton } from 'features/task-create'
import { UiInput } from 'shared/ui'
import { TaskColumn } from 'widgets/task-column'

import { Layout } from './layout/layout'

export const HomePage = () => {
  const { tasks } = useSelector((state: RootState) => state.createTask)
  const { isShowFieldCreateTask } = useSelector(
    (state: RootState) => state.input,
  )

  return (
    <Layout>
      <TaskColumn title="Задачи">
        <TaskCreateButton />
        {isShowFieldCreateTask && <UiInput />}
        {tasks.map((task, i) => (
          <div key={i}>{task.title}</div>
        ))}
      </TaskColumn>
      <TaskColumn title="В разработке" />
      <TaskColumn title="Выполненные" />
    </Layout>
  )
}
