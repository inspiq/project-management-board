import { UiButton } from 'shared/ui'

export const TaskCreateButton = ({ open }: { open: () => void }) => {
  return <UiButton onClick={open}>Добавить задачу</UiButton>
}
