import React from "react";
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Text,
  useDisclosure,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiBell } from "react-icons/fi";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { GrCircleQuestion } from "react-icons/gr";
const Navbar = ({ children }) => {
  const { onOpen } = useDisclosure();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} w="100%">
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  );
};
const MobileNav = ({ onOpen, ...rest }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("email");
  const signoutHandler = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };
  return (
    <Flex
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height="3.6rem"
      alignItems="center"
      justifyContent={{ base: "space-between", md: "space-between" }}
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      {...rest}
      width="100%"
    >
      <RouterLink to={""}>
        <Image
          display={{ base: "flex", md: "flex" }}
          fontSize="2xl"
          ml={{ base: 30 }}
          fontFamily="monospace"
          fontWeight="bold"
          src="https://clockify.me/assets/images/clockify-logo.svg"
        />
      </RouterLink>

      <HStack spacing={{ base: "0", md: "8" }}>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          <Text>{user} workspace</Text>
          <Text
            border={"1px solid #8ad9fa"}
            fontSize={["2", "8", "12"]}
            color={"#8ad7fa"}
            textDecor="none"
            _hover={{ bg: "#8ad7fa", color: "#fff" }}
            p={[1]}
          >
            <RouterLink to="/clockify/upgrade">UPGRADE</RouterLink>
          </Text>
          <Box>
            <IconButton
              borderLeft={"1px solid grey"}
              borderRadius="none"
              borderStyle={"dotted"}
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<GrCircleQuestion />}
            />
            <IconButton
              borderRadius="none"
              borderLeft={"1px solid grey"}
              borderRight={"1px solid grey"}
              borderStyle={"dotted"}
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<FiBell />}
            />
          </Box>
        </HStack>

        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
              zIndex={999}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <RouterLink to="/clockify/upgrade">
                <MenuItem>Upgrade</MenuItem>
              </RouterLink>
              <MenuDivider />
              <MenuItem
                cursor={"pointer"}
                color={"red"}
                fontWeight={500}
                onClick={signoutHandler}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Navbar;
