import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return <div className={styles.container}>{children}</div>
}
