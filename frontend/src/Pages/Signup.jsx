import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Image,
  useToast,
} from "@chakra-ui/react";
import * as types from "../Redux/AuthReducer/actionType";

import { useState } from "react";
import quizicon from "../components/quizicon.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "../Redux/AuthReducer/action";

const Signup = () => {
  const initText = { name: "", email: "", password: "" };
  const [text, setText] = useState(initText);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { isAdmin, token, isError, isLoading } = useSelector(
    (state) => state.AuthReducer
  );
  const location = useLocation();

  const handleChange = (e) => {
    let inp = e.target.name;

    setText({
      ...text,
      [inp]: e.target.value,
    });
  };
  const handleSubmit = () => {
    dispatch(signupAction(text))
      .then((res) => {
        dispatch({ type: types.USER_SIGNUP, payload: res.data });
        toast({
               title: "Signup Successfull!",
               description: "Please login for access the features.",
               status: "success",
               duration: 8000,
               isClosable: true,
              });
              setText(initText);
              navigate("/login")
      })
      .catch((err) => {
        dispatch({ type: types.USER_FAILURE });
        toast({
          title: "Signup failed!",
          description: `${err.response.data.message}`,
          status: "error",
          duration: 8000,
          isClosable: true,
         });
      });
     
  };

  return (
    <Container
      maxW="lg"
      mt={"-5"}
      mb={"5"}
      py={{ base: "1", md: "0" }}
      px={{ base: "2", sm: "5" }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Image src={quizicon} alt={"logo"} w={"50px"} margin={"auto"} />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg-surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  type="name"
                  name="name"
                  value={text.name}
                  onChange={handleChange}
                />
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={text.email}
                  onChange={handleChange}
                />
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={text.password}
                  onChange={handleChange}
                />
              </FormControl>
              {/* <PasswordField /> */}
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button
                colorScheme="linkedin"
                onClick={handleSubmit}
                isDisabled={!text.email || !text.password}
                isLoading={isLoading}>
                sign up
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
            </Stack>
          </Stack>
          <HStack spacing="1" justify="center">
            <Text color="muted">You already have an account?</Text>
            <Link to="/login" style={{ color: "#00a0dc", fontWeight: "bold" }}>
              sign in
            </Link>
          </HStack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Signup;
