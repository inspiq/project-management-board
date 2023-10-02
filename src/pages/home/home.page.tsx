import { TaskColumn } from 'widgets/task-column'

import { Layout } from './layout/layout'

export const HomePage = () => (
  <Layout>
    <TaskColumn title="Задачи" isShowButton />
    <TaskColumn title="В разработке" />
    <TaskColumn title="Выполненные" />
  </Layout>
)
