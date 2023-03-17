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
import { useEffect, useState } from "react";
import quizicon from "../components/quizicon.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAction,
  signinFailed,
  signinSuccess,
} from "../Redux/AuthReducer/action";

export const Login = () => {
  const [text, setText] = useState({email:"", password:""});
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { isAdmin, token, isError, isLoading } = useSelector(
    (state) => state.AuthReducer
  );
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    let inp = e.target.name;

    setText({
      ...text,
      [inp]: e.target.value,
    });
  };
  const handleLogin = () => {
    if (text.email.length>4 && text.password.length>5) {
      dispatch(loginAction(text))
        .then((res) => {
          dispatch(signinSuccess(res));
          toast({
            title: "Login Successfully!",
            description: "you are logged in our website.",
            status: "success",
            duration: 8000,
            isClosable: true,
          });
        })
        .catch((err) => {
          dispatch(signinFailed());
          console.log(err?.response?.data);
          toast({
            title: "Login Failed!",
            description:
              "Email and password not matched. Please check or sign up.",
            status: "error",
            duration: 8000,
            isClosable: true,
          });
        });
    }else{
      toast({
        title:
          "Password length should be more than 5",
        status: "error",
        duration: 8000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (token.length) {
      navigate(from, { replace: true });
    }
  }, [token]);


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
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  isRequired
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  isRequired
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </FormControl>
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
                onClick={handleLogin}
                isDisabled={!text.email || !text.password}
                isLoading={isLoading}>
                Sign in
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
            <Text color="muted">Don't have an account?</Text>
            <Link to="/signup" style={{ color: "#00a0dc", fontWeight: "bold" }}>
              Sign up
            </Link>
          </HStack>
        </Box>
      </Stack>
    </Container>
  );
};
