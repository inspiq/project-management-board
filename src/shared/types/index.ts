import { Status } from './enums'

export * from './enums'

export interface Task {
  id: string
  title: string
  status: Status
  isCompleted: boolean
}
