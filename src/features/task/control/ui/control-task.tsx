import { MenuIcon } from 'shared/icons'

import styles from './styles.module.css'

interface TaskControlProps {
  toggle: () => void
}

export const ControlTask = ({ toggle }: TaskControlProps) => {
  const handleToggleMenu = () => {
    toggle()
  }

  return (
    <div onClick={handleToggleMenu} className={styles.checkMarkIconWrapper}>
      <MenuIcon />
    </div>
  )
}
