import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { getSingleUser } from "../../Redux/AuthReducer/action";

const Profile = () => {
  const state = useSelector((state) => state.AuthReducer);
  const { user, email, isAdmin, userCreatedAt, token } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    let localToken = localStorage.getItem("token");
    if ((!user || !token) && localToken) {
      // getUser();
      dispatch(getSingleUser(JSON.parse(localToken)));
    }
  }, [!user]);

  const formatDate = (value) => {
    const monthsName = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    if (!value) return;
    const date = new Date(value);
    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();

    let month = monthsName[date.getMonth()];
    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  return (
    <Box>
      <Center py={6}>
        <Box
          maxW={"290px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}>
          <Image
            h={"120px"}
            w={"full"}
            src={
              "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            objectFit={"cover"}
          />
          <Flex justify={"center"} mt={-12}>
            <Avatar
              size={"xl"}
              src={
                "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1679589674~exp=1679590274~hmac=7b6730d21c4e275a4b7e20f46fceada49a550db468bdab5e1cf713512e500722"
              }
              alt={"Author"}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {user}
              </Heading>
              <Text color={"gray.500"}>{email}</Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>{isAdmin ? "Admin" : "User"}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Role
                </Text>
              </Stack>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>{formatDate(userCreatedAt)}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Created At
                </Text>
              </Stack>
            </Stack>

            <Button
              w={"full"}
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}>
              Edit profile
            </Button>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Profile;
