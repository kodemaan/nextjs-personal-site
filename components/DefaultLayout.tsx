import { Box, Container } from '@chakra-ui/react'
import { Header } from './Header'
export const DefaultLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Container mt={4} minWidth={{ base: '100vw', md: '60%' }}>
      <Header />
      <Box mt={2}>{children}</Box>
    </Container>
  )
}
