import { UiButton } from 'shared/ui'

export const CreateTaskButton = ({ open }: { open: () => void }) => {
  return <UiButton onClick={open}>Добавить задачу</UiButton>
}
