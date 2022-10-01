import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsTags } from "react-icons/bs";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Box
      bg="white"
      w="20%"
      h="100vh"
      color="black"
      display={"flex"}
      flexDirection="column"
      gap="2rem"
      border={"1px solid black"}
      m="0"
      position="fixed"
      z-index="1"
      top="0"
    >
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
        onClick={() => navigate("/clockify/")}
      >
        <Text as="b">TIME TRACKER</Text>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
      >
        <Text as="b">CALENDAR</Text>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
        onClick={() => navigate("/clockify/dashboard")}
      >
        <Text as="b">DASHBOARD</Text>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
      >
        <Text as="b">REPORTS</Text>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
      >
        <Box onClick={() => navigate("/clockify/project")}>
          <Text as="b">PROJECTS</Text>
        </Box>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
      >
        <Text as="b">TEAM</Text>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
      >
        <Flex justifyContent={"center"} gap="2rem">
          <BsTags fontSize={"30px"} />
          <Text as="b">TAGS</Text>
        </Flex>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
      >
        <Text as="b">CLIENTS</Text>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
      >
        <Text as="b">SETTINGS</Text>
      </Box>
    </Box>
  );
};

export default Sidebar;
