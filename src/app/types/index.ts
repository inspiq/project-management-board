export enum Status {
  IN_PROGRESS = 'In progress',
  COMPLETED = 'Completed',
  NEW = 'New',
}

export interface Task {
  id: string
  title: string
  status: Status
  isCompleted: boolean
}
