import React from 'react'
import { Container } from 'semantic-ui-react'
import classNames from "classnames";
import { Footer, TopBar } from '@/component/layout'
import styles from './BasicLayout.module.scss'
import { Separator } from '@/component/Shared';

export const BasicLayout = ({children, isOpenSearch = false, isContainer = false, relative = false}) => {

  return (
    <> 
    <Container fluid className={styles.maincontainer}>
        <TopBar isOpenSearch={isOpenSearch} />
          <Separator height={100} />

          <div className={classNames(styles.content,{ [styles.relative]: relative })}>
            {isContainer ? <Container>{children}</Container> : children}
          </div>
      </Container>
      <Footer />
    </>
  );
}
