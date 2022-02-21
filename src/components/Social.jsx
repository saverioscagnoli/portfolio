import React from 'react'
import { Box, Link, Container, Heading, Text, ListIcon, List, ListItem } from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Social() {
  return (
    <Container>
    <Box paddingTop={5}>
    <Heading size='md' textDecor='underline' alignContent='left' 
     textUnderlineOffset={2} textDecorationColor='gray' textDecorationThickness={4}>Social networks</Heading>

     <List padding={3} textUnderlineOffset={3} color='teal.300'>
         <Link href='https://github.com/saverioscagnoli' isExternal><ListItem _hover={{backgroundColor: '#80808031'}} width={110} borderRadius={4}><ListIcon as={FaGithub} />Github</ListItem></Link>
         <Link href='https://www.instagram.com/saverioscagnoli/' isExternal><ListItem _hover={{backgroundColor: '#80808031'}} width={110} borderRadius={4}><ListIcon as={FaInstagram} />Instagram</ListItem></Link>
         <Link href='https://twitter.com/Saverio77764458' isExternal><ListItem _hover={{backgroundColor: '#80808031'}} width={110} borderRadius={4}><ListIcon as={FaTwitter} />Twitter</ListItem></Link>
         <Link href='https://www.linkedin.com/in/saverio-scagnoli-988463227/' isExternal><ListItem _hover={{backgroundColor: '#80808031'}} width={110} borderRadius={4}><ListIcon as={FaLinkedin} />LinkedIn</ListItem></Link>
     </List>

    </Box>
    </Container>
  )
}

export default Social