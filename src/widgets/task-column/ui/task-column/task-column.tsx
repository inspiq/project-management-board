import { PropsWithChildren } from 'react'
import { ColumnTitles } from 'shared/types'

import styles from './styles.module.css'

interface TaskColumnProps {
  title: string
  isShowButton?: boolean
  isShowInput?: boolean
}

export const TaskColumn = ({
  title,
  children,
}: PropsWithChildren<TaskColumnProps>) => {
  const columnStyle: { [key: string]: string } = {
    [ColumnTitles.IN_PROGRESS]: styles.inProgressBorder,
    [ColumnTitles.COMPLETED]: styles.completedBorder,
    [ColumnTitles.TASKS]: styles.tasksBorder,
  }

  return (
    <div className={`${styles.taskColumn} ${columnStyle[title]}`}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  )
}
