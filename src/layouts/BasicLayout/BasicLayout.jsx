import React from 'react'
import { Container } from 'semantic-ui-react'
import classNames from "classnames";
import { Footer, TopBar } from '@/component/layout'
import styles from './BasicLayout.module.scss'

export const BasicLayout = ({children, isOpenSearch = false, isContainer = false, relative = false}) => {

  return (
    <>
      <TopBar isOpenSearch={isOpenSearch} />
      
      <Container fluid>
        <div className={classNames({ [styles.relative]: relative })}>
          {isContainer ? <Container>{children}</Container> : children}
        </div>
      </Container>

      <Footer />
    </>
  );
}
