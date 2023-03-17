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
                    "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>{user}</MenuItem>
                <MenuDivider />
               <Link to="/profile"><MenuItem >Profile</MenuItem></Link> 
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
