import { Center, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <Center>
      <VStack marginTop={100}>

      <Heading>Saverio Scagnoli</Heading>
      <Heading as='h3' size='sm'>Game and level designer</Heading>

      </VStack>

    </Center>
  )
}

export default Header