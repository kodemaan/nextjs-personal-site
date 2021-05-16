import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
export const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const mainBoxColor = useColorModeValue('gray.800', 'gray.50') 
  return (
    <Box>
      <Button onClick={toggleColorMode}>Change color mode</Button>
      <Box bg='tomato' color={mainBoxColor}>Test pokemon</Box>
    </Box>
  )
}