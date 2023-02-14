import { Container, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { isAdmin, token, user } = useSelector((state) => state.AuthReducer);
  const navigate = useNavigate();

  return (
    <Container maxW='container.sm'>
<Text>Welcome</Text>
<br /><br />
{token.length? <Heading as="h1">Hi, {user} </Heading>: 
<Heading as="h3">You are not logged in Please login!</Heading>}

    </Container>
  )
}

export default Home