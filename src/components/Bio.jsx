import React from 'react'
import { Box, Flex, Container, Heading, Text } from '@chakra-ui/react'


function Bio() {
  return (
    <Container>
    <Box>
    <Heading size='md' textDecor='underline' alignContent='left' 
     textUnderlineOffset={2} textDecorationColor='gray' textDecorationThickness={4}>Bio</Heading>

    <Flex paddingTop={4}>
    <Text fontWeight='bold' fontSize='17px'>2002</Text>
    <Text paddingLeft={3}>Born in Rome, Italy.</Text>
    </Flex>

    <Flex paddingTop={2}>
    <Text fontWeight='bold' fontSize='17px'>2020</Text>
    <Text paddingLeft={3}>Redeemed C1 (Advanced) english certificate.</Text>
    </Flex>

    <Flex paddingTop={2}>
    <Text fontWeight='bold' fontSize='17px'>2021</Text>
    <Text paddingLeft={3}>Graduated from mathematical high school "Galileo Galilei", Rome</Text>
    </Flex>

    <Flex paddingTop={2}>
    <Text fontWeight='bold' fontSize='17px'>2023</Text>
    <Text paddingLeft={3}>Graduated with bachelor's degree from AIV (Accademia Italiana Videogiochi)</Text>
    </Flex>

    </Box>
    </Container>
  )
}

export default Bio