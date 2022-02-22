import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, VStack, Box, IconButton, useColorMode, Image, Heading, List, ListItem, ListIcon, Link as CLink, useColorModeValue, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import React from 'react'

function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const qm = `/images/${isDark? 'qmwhite' : 'qm'}.png`;
    const naps = '/images/napstablook.png';

  return (
    <Center marginTop={5} width='100%'>
    <VStack pos='fixed' backdropFilter='auto' backdropBlur='8px' zIndex={1} marginTop={2} >
        <Flex  width='100%' height={12} align='center' marginLeft={-60}>
            <Link to='/'><Box className='logo' display='flex' cursor='pointer'>
                <Image className='naps' src={naps} width={5} height={10} transition='100ms ease' pos='absolute' marginTop={1} marginLeft={3}></Image>
                <Image className='qm' src={qm} width={10} height={10} transition='100ms ease' paddingRight={10}></Image>

                <Heading as='h3' size='md' marginTop={2} marginRight={6}>saverioscagnoli</Heading>
            </Box></Link> 
            
            <List display='flex' fontWeight='semibold' textUnderlineOffset={2}>   
                 <Link to='/works'><ListItem _hover={{ textDecoration: 'underline'}} padding={2}>Works</ListItem></Link> 
                 <CLink href='https://www.linkedin.com/in/saverio-scagnoli-988463227/' isExternal><ListItem padding={2}>linkedIn</ListItem></CLink> 
                 <CLink href='https://github.com/saverioscagnoli/portfolio' isExternal><ListItem display='flex' padding={2}> <ListIcon as={FaGithub} marginTop='4px' /> Source</ListItem></CLink> 
            </List>


            <IconButton icon={isDark? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode} marginLeft={40} color={isDark? 'black' : 'white'}
            backgroundColor={isDark? '#fbd38d' : '#805ad5'} _hover={{ background: isDark? '#f6ad55' : '#6b46c1'}}></IconButton>
        </Flex>
    </VStack>
    </Center>
  )
}

export default Navbar