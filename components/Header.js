import { Box, IconButton, Flex, Heading, Link, Spacer, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'
export const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorChangeIcon = props.colorMode === 'light' ? <MoonIcon /> : <SunIcon />;
  return (
    <React.Fragment>
      <Box mb='2'>
        <Flex alignItems='center'>
          <Heading>Steven Smith</Heading>
          <Spacer />
          <IconButton aria-label='Toggle color mode (light / dark)' onClick={toggleColorMode} icon={colorChangeIcon} />
        </Flex>
      </Box>
      <Box>
        <Flex>
          <Link mr={2}>Home</Link>
          <Link mx={2}>Resume</Link>
          <Link mx={2}>Projects</Link>
        </Flex>
      </Box>
    </React.Fragment>
  )
}
