import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}
