import { useSelector } from 'react-redux'
import { RootState } from 'app/store'
import { TaskCreateButton } from 'features/task-create'
import { ColumnTitles, Status } from 'shared/types'
import { UiInput } from 'shared/ui'
import { TaskColumn } from 'widgets/task-column'
import { TasksList } from 'widgets/tasks'

import { Layout } from './layout/layout'

export const HomePage = () => {
  const { isShowFieldCreateTask } = useSelector(
    (state: RootState) => state.input,
  )

  return (
    <Layout>
      <TaskColumn title={ColumnTitles.TASKS}>
        <TaskCreateButton />
        {isShowFieldCreateTask && <UiInput />}
        <TasksList status={Status.NEW} columnTitle={ColumnTitles.TASKS} />
      </TaskColumn>
      <TaskColumn title={ColumnTitles.IN_PROGRESS}>
        <TasksList
          status={Status.IN_PROGRESS}
          columnTitle={ColumnTitles.IN_PROGRESS}
        />
      </TaskColumn>
      <TaskColumn title={ColumnTitles.COMPLETED}>
        <TasksList
          status={Status.COMPLETED}
          columnTitle={ColumnTitles.COMPLETED}
        />
      </TaskColumn>
    </Layout>
  )
}
