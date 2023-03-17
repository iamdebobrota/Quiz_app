import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
    const { isAdmin, token, user } = useSelector((state) => state.AuthReducer);

  return (
    <Box>
        <h4>Name: {user}</h4>
        <p>Email: {}</p>
    </Box>
  )
}

export default Profile