import { useEffect, useState } from 'react'
import { DeleteTask } from 'features/task'

import styles from './styles.module.css'

export const Menu = ({ id, isVisible }: { id: string; isVisible: boolean }) => {
  const [shouldShowMenu, setShouldShowMenu] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setShouldShowMenu(true)
    }

    if (!isVisible) {
      setShouldShowMenu(false)
    }
  }, [isVisible])

  const cn = shouldShowMenu
    ? `${styles.menuContainer} ${styles.showMenu}`
    : `${styles.menuContainer}`

  return (
    <div className={cn}>
      <div className={styles.menuItem}>
        <DeleteTask id={id} />
      </div>
    </div>
  )
}
