import React from 'react'
import { Box, Link, Container, Heading, Text } from '@chakra-ui/react'

function Ilove() {
  return (
    <Container>
    <Box paddingTop={5}>
    <Heading size='md' textDecor='underline' alignContent='left' 
     textUnderlineOffset={2} textDecorationColor='gray' textDecorationThickness={4}>I ♥</Heading>

     <Text textAlign='justify' paddingTop={5} >Art, music, {' '}
     <Link href='https://500px.com/p/saverioscagnoli?view=photos' isExternal fontWeight='semibold' color='pink.300' textUnderlineOffset={3}>photography</Link>
     , origami, travelling and mangas, with my favourite being <strong>Berserk</strong>.</Text>
    </Box>
    </Container>
  )
}

export default Ilove