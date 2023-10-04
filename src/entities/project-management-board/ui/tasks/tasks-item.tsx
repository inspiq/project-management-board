import { memo } from 'react'

interface TasksItemProps {
  title: string
  index: number
}

export const TasksItem = memo(({ title, index }: TasksItemProps) => (
  <div key={index}>{title}</div>
))
