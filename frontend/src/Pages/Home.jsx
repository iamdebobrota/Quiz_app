import { Box, Button, Card, CardBody, CardFooter, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { isAdmin, token, user } = useSelector((state) => state.AuthReducer);
  const navigate = useNavigate();


  const CardsMap=[
    {}
  ]


  return (
    <Box maxW='90%' m={"auto"}>
<Text>Welcome</Text>
{token.length? <Heading as="h1">Hi, {user} </Heading>: 
<Heading as="h3">You are not logged in Please login!</Heading>}


<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>

    </Box>
  )
}

export default Home