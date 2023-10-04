import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

interface TaskColumnProps {
  title: string
  isShowButton?: boolean
  isShowInput?: boolean
}

export const TaskColumn = ({
  title,
  children,
}: PropsWithChildren<TaskColumnProps>) => (
  <div className={styles.taskColumn}>
    <div className={styles.title}>{title}</div>
    {children}
  </div>
)
