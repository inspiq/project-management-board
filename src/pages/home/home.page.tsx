import { CreateTaskButton } from 'features/task'
import { useToggle } from 'shared/hooks'
import { ColumnTitles, Status } from 'shared/types'
import { UiTextArea } from 'shared/ui'
import { TaskColumn } from 'widgets/task-column'
import { TasksList } from 'widgets/tasks'

import { Layout } from './layout/layout'

export const HomePage = () => {
  const { open, isVisible } = useToggle()

  return (
    <Layout>
      <TaskColumn title={ColumnTitles.TASKS}>
        <CreateTaskButton open={open} />
        {isVisible && <UiTextArea />}
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
