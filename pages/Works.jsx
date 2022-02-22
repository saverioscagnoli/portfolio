import { Container, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Works() {
  return (
    <Container>

    <Heading size='md' textDecor='underline' textDecorationThickness={4} textDecorationColor='grey' textUnderlineOffset={2}>Works</Heading>


    <Grid templateColumns='repeat(2, 1fr)' gap={5} marginTop={10} >
    <Link to='/downgrade'><GridItem width={200}><Image src='/images/pdowngrade/logo.jpg' borderRadius={10} /></GridItem></Link>
    <Link to='/lalartu'><GridItem width={200}><Image height={200} src='/images/lalartu/logo.png' borderRadius={10} /></GridItem></Link>
    <GridItem  textAlign='center' width={200}><Text fontSize={18} fontWeight='semibold'>Project: Downgrade <br/></Text>
    Project: Downgrade is a small fantasy action game, made in less than a month by a team of 5 designers.</GridItem>
    <GridItem textAlign='center' width={200}><Text fontSize={18} fontWeight='semibold'>Lalartu <br/></Text>
    Lalartu is a narrative-driven, investigative graphic adventure, It is the project I'm currently working on. </GridItem>
    </Grid>
    </Container>
    )
}

export default Works