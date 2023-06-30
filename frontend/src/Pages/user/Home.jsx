import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSingleUser } from "../../Redux/AuthReducer/action";

const Home = () => {
  const state = useSelector((state) => state.AuthReducer);
  const { token, user } = state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const toast = useToast();

  // const getUser = () => {
  //   dispatch(getSingleUser(JSON.parse(token)))
  //   .then((res) => setUserData(res.user))
  //   .catch((er) =>{
  //     toast({
  //       title: "User data not found!",
  //       description: "Please signup or login",
  //       status: "error",
  //       duration: 8000,
  //       isClosable: true,
  //     });
  //   });
  // };

  useEffect(() => {
    let localToken = localStorage.getItem("token");
    if ((!user || !token) && localToken) {
      // getUser();
      dispatch(getSingleUser(JSON.parse(localToken)));
    }
  }, [!user]);

  // console.log(state)
  const date = new Date();
  const hour = date.getHours();

  return (
    <Box maxW="90%" m={"auto"} p={10}>
      {hour >= 12 ? (
        hour >= 16 ? (
          <Text fontSize={"2xl"}>Good Evening 👋</Text>
        ) : (
          <Text fontSize={"2xl"}>Good Afternoon 👋</Text>
        )
      ) : (
        <Text fontSize={"2xl"} display={"flex"}>
          Good Morning {"  "}
          <Image
            src="https://em-content.zobj.net/source/microsoft-teams/363/sunrise-over-mountains_1f304.png"
            height={"10"}></Image>
        </Text>
      )}
      {token.length ? (
        <Heading as="h4">Welcome to Deb's Quiz, {user} 👋</Heading>
      ) : (
        <Heading as="h3">You are not logged in Please login!</Heading>
      )}

      <Box marginTop={"8"}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline">
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">The perfect latte</Heading>

              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Attempt
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
