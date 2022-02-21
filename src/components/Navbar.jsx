import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, VStack, Box, IconButton, useColorMode, Image, Heading, List, ListItem, Link, ListIcon } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa';
import React from 'react'

function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const qm = `/images/${isDark? 'qmwhite' : 'qm'}.png`;
    const naps = '/images/napstablook.png';

  return (
    <VStack pos='fixed' backdropFilter='auto' backdropBlur='8px'>
        <Flex  width='100%' height={20} align='center' marginLeft={-60}>
            <Box className='logo' display='flex' cursor='pointer'>
                <Image className='naps' src={naps} width={7} height={14} transition='100ms ease' pos='absolute'></Image>
                <Image className='qm' src={qm} width={10} height={10} transition='100ms ease' paddingRight={10}></Image>

                <Heading as='h3' marginRight={10}>saverioscagnoli</Heading>
            </Box>
            
            <List display='flex' fontWeight='semibold' textUnderlineOffset={2}>   
                 <Link><ListItem padding={2}>Works</ListItem></Link> 
                 <Link href='https://www.linkedin.com/in/saverio-scagnoli-988463227/' isExternal><ListItem padding={2}>linkedIn</ListItem></Link> 
                 <Link href='https://github.com/saverioscagnoli/portfolio' isExternal><ListItem display='flex' padding={2}> <ListIcon as={FaGithub} marginTop='4px' /> Source</ListItem></Link> 
            </List>


            <IconButton icon={isDark? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode} marginLeft={40} color={isDark? 'black' : 'white'}
            backgroundColor={isDark? '#fbd38d' : '#805ad5'} _hover={{ background: isDark? '#f6ad55' : '#6b46c1'}}></IconButton>
        </Flex>
    </VStack>
  )
}

export default Navbar