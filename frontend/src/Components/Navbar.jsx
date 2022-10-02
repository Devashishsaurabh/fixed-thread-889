import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Links = ["features", "download"];

const NavLink = ({ children }) => (
  <RouterLink
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={`/${children}`}
  >
    <Text textTransform={"uppercase"}>{children}</Text>
  </RouterLink>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = localStorage.getItem("email");
  return (
    <>
      <Box py={[1, 3]} px={[null, 20]} mb={10}>
        <Flex
          h={[10, 16]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <RouterLink to={"/"}>
                <Image src="https://clockify.me/assets/images/clockify-logo.svg"></Image>{" "}
              </RouterLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"ghosted"}
              colorScheme={"blue"}
              size={["xs", "sm"]}
              mr={4}
            >
              {!user ? (
                <RouterLink to={"/login"}>LOG IN</RouterLink>
              ) : (
                <Text>{user}</Text>
              )}
            </Button>
            {!user ? (
              <Button
                variant={"outline"}
                color={"blue.400"}
                borderColor={"blue.400"}
                borderRadius={"sm"}
                _hover={{ color: "white", bg: "blue.400" }}
                size={["xs", "sm"]}
                mr={4}
                px={7}
                py={5}
              >
                <RouterLink to={"/signup"}>SIGN UP FREE</RouterLink>
              </Button>
            ) : (
              ""
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
