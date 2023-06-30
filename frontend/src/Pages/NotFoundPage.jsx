import React from 'react';
import errImg from "../utils/404.jpg"
import { Flex, Image } from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
        <Image  h="xl" src={errImg} alt="Routes_Not_Found" />
    </Flex>
  )
}

export default NotFoundPage