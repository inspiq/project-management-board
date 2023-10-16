import { MenuIcon } from 'shared/icons'

import styles from './styles.module.css'

interface TaskControlProps {
  toggle: () => void
}

export const TaskControl = ({ toggle }: TaskControlProps) => {
  const handleShowMenu = () => {
    toggle()
  }

  return (
    <div onClick={handleShowMenu} className={styles.checkMarkIconWrapper}>
      <MenuIcon />
    </div>
  )
}
