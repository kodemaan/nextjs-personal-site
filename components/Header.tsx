import { Box, IconButton, Flex, Heading, Link, Spacer, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'
export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const colorChangeIcon = colorMode === 'light' ? <MoonIcon /> : <SunIcon />
  return (
    <React.Fragment>
      <Box mb='6'>
        <Flex alignItems='center'>
          <Heading size='2xl'>Steven Smith</Heading>
          <Spacer />
          <IconButton aria-label='Toggle color mode (light / dark)' onClick={toggleColorMode} icon={colorChangeIcon} />
        </Flex>
      </Box>
      <Box mb='6'>
        <Flex>
          <NextLink href='/'><Link mr={2}>Home</Link></NextLink>
          <NextLink href='/resume'><Link mx={2}>Resume</Link></NextLink>
          <NextLink href='/projects'><Link mx={2}>Projects</Link></NextLink>
        </Flex>
      </Box>
    </React.Fragment>
  )
}
