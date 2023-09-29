import { PropsWithChildren } from 'react'
import { PlusIcon } from 'shared/icons'

import styles from './styles.module.css'

export const UiButton = ({ children }: PropsWithChildren<unknown>) => (
  <div className={styles.btn}>
    <PlusIcon width={16} height={16} />
    <p>{children}</p>
  </div>
)
