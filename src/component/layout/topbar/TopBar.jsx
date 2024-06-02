import Link from 'next/link'
import styles from './TopBar.module.scss'
import { Image } from 'semantic-ui-react'
import {Account} from '../account'
import { Menu } from '../menu'


export function TopBar() {
  return (
    <div className={styles.topBar} >
      <div className={styles.left}>
        <Link href="/">
          <Image src="/image/logo.png" alt="Gaming" />
        </Link>
      </div  >

      <div className={styles.center}>
       <Menu />
      </div>

      <div className={styles.right}>
        <Account/>
      </div>
    </div>
  )
}
