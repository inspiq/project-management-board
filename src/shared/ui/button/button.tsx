import { PropsWithChildren } from 'react'
import { PlusIcon } from 'shared/icons'

import styles from './styles.module.css'

interface UiButtonProps {
  onClick: () => void
}

export const UiButton = ({
  children,
  onClick,
}: PropsWithChildren<UiButtonProps>) => (
  <div className={styles.btn} onClick={onClick}>
    <PlusIcon width={16} height={16} color={'var(--blue)'} />
    <p>{children}</p>
  </div>
)
