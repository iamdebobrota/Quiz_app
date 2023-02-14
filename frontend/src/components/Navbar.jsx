import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import quizicon from "./quizicon.svg";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAdmin, token, user } = useSelector((state) => state.AuthReducer);
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login")
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  
  // console.log(user)
  return (
    <>
      <Box bg={"gray.100"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link to="/">
              <Image src={quizicon} alt={"Logo"} h={"50px"} />
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              {/* {Links.map((link) => ( */}
              <Link to="/">Dashboard</Link>
              <Link to="/quiz">Quiz</Link>
              {/* ))} */}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Link to="/login">
              <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}
           onClick={token.length !== 0 ? handleLogout : handleLogin}
              >
                 {token.length === 0 ? "Sign in" : "Log out"} 
              </Button>
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>{user}</MenuItem>
                <MenuDivider />
                <MenuItem >Profile</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to="/">Dashboard</Link>
              <Link to="/quiz">Quiz</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
