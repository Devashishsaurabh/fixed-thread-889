import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { BsTags } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Box
      bg="white"
      w="20%"
      color="black"
      display={"flex"}
      flexDirection="column"
      gap="2rem"
      borderRight="1px"
      borderBottom="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
        onClick={() => navigate("/clockify/")}
        display={"flex"}
        justifyContent={"center"}
        gap="2rem"
      >
        <AiOutlineClockCircle fontSize={"30px"} />
        <Text as="b">TIME TRACKER</Text>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
        display={"flex"}
        justifyContent={"center"}
        gap="2rem"
      >
        <BiCalendar fontSize={"30px"} />
        <Text as="b">CALENDAR</Text>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
        onClick={() => navigate("/clockify/dashboard")}
        display={"flex"}
        justifyContent={"center"}
        gap="2rem"
      >
        <MdOutlineDashboard fontSize={"25px"} />
        <Text as="b">DASHBOARD</Text>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
        display={"flex"}
        justifyContent={"center"}
        gap="2rem"
      >
        <TbReportAnalytics fontSize={"30px"} />
        <Text as="b">REPORTS</Text>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
      >
        <Box
          onClick={() => navigate("/clockify/project")}
          display={"flex"}
          justifyContent={"center"}
          gap="2rem"
        >
          <AiOutlineProject fontSize={"30px"} />
          <Text as="b">PROJECTS</Text>
        </Box>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
        display={"flex"}
        justifyContent={"center"}
        gap="2rem"
      >
        <RiTeamFill fontSize={"30px"} />
        <Text as="b">TEAMS</Text>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
        display={"flex"}
        justifyContent={"center"}
        gap="2rem"
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
        display={"flex"}
        justifyContent={"center"}
        gap="2rem"
      >
        <HiOutlineUserCircle fontSize={"30px"} />
        <Text as="b">CLIENTS</Text>
      </Box>
      <Box
        w="100%"
        padding={"1rem"}
        _hover={{ bg: "gray", color: "white" }}
        cursor="pointer"
        bg="white"
        display={"flex"}
        justifyContent={"center"}
        gap="2rem"
      >
        <FiSettings fontSize="30px" />
        <Text as="b">SETTINGS</Text>
      </Box>
    </Box>
  );
};
export default Sidebar;
