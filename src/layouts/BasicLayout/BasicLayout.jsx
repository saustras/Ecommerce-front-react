import React from 'react'
import { Container } from 'semantic-ui-react'

export const BasicLayout = (props) => {
  const { children, isOpenSearch = false, isContainer = false, realtive = false } = props

  return (
    <>
      <Container fluid>
        {isContainer? <Container> {children}  </Container>: children }
      </Container>
    </>
  )
}
