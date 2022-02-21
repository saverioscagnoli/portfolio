import { Box, Button, Center, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Work() {
  return (
      <Container>
          <Box>
          <Heading size='md' textDecor='underline' alignContent='left' 
           textUnderlineOffset={2} textDecorationColor='gray' textDecorationThickness={4}>Work</Heading>

           <Text textAlign='justify' paddingTop={5} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non facilisis velit. Praesent elit tellus, semper in ex nec, 
                rutrum blandit dui. Suspendisse potenti. Sed mauris sem, euismod eget eleifend quis, fermentum vel nulla. Donec quis pellentesque sapien. 
                Pellentesque elementum, sapien sit amet rutrum dictum, augue leo commodo nisl, a porttitor sapien ex ac est. Pellentesque quis tortor felis. 
                Morbi sed justo fringilla, gravida libero sit amet, luctus nisi. Curabitur vulputate mollis massa ac ultrices. Curabitur a sodales est. Fusce
                finibus lorem et felis accumsan tincidunt. Etiam vitae magna non sapien fringilla mollis vel sit amet lacus.</Text>

                <Center paddingTop={5} ><Button background='teal.300' _hover={{ background: 'teal'}}>My portfolio </Button></Center>
          </Box>
      </Container>
)
}

export default Work