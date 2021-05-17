import { Box, Container } from '@chakra-ui/react'
import { Header } from './Header'
import React from 'react'
export const DefaultLayout = ({children}) => {
  return (
    <Container mt={4} minWidth={{base: '100vw', md: '60%'}}>
      <Header />
      <Box mt={2}>{children}</Box>
    </Container>
  )
}