import React from 'react'
import { Box, Link, Container, Heading, Text, ListIcon, List, ListItem } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

function Social() {
  return (
    <Container>
    <Box paddingTop={5}>
    <Heading size='md' textDecor='underline' alignContent='left' 
     textUnderlineOffset={2} textDecorationColor='gray' textDecorationThickness={4}>Social networks</Heading>

     <List padding={3}>
         <ListItem><ListIcon as={FaGithub} />Github</ListItem>
         <ListItem><ListIcon as={FaGithub} />Github</ListItem>
         <ListItem><ListIcon as={FaGithub} />Github</ListItem>
         <ListItem><ListIcon as={FaGithub} />Github</ListItem>
     </List>

    </Box>
    </Container>
  )
}

export default Social