import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box bg="white" w="20%" h="100vh" p={4} color="black" display={"flex"} flexDirection="column" gap="2rem" border={"1px solid black"} >
      <Box w="100%" padding={"1rem"} _hover={{bg:"gray",color:"white"}} bg="white"><Text as="b" >TIME TRACKER</Text></Box>
      <Box w="100%" padding={"1rem"} _hover={{bg:"gray",color:"white"}} bg="white"><Text as="b" >CALENDAR</Text></Box>
      <Box w="100%" padding={"1rem"} _hover={{bg:"gray",color:"white"}} bg="white"><Text as="b" >DASHBOARD</Text></Box>
      <Box w="100%" padding={"1rem"} _hover={{bg:"gray",color:"white"}} bg="white"><Text as="b" >REPORTS</Text></Box>
      <Box w="100%" padding={"1rem"} _hover={{bg:"gray",color:"white"}} bg="white"><Text as="b" >PROJECTS</Text></Box>
      <Box w="100%" padding={"1rem"} _hover={{bg:"gray",color:"white"}} bg="white"><Text as="b" >TEAM</Text></Box>
      <Box w="100%" padding={"1rem"} _hover={{bg:"gray",color:"white"}} bg="white"><Text as="b" >TAG</Text></Box>
      <Box w="100%" padding={"1rem"} _hover={{bg:"gray",color:"white"}} bg="white"><Text as="b" >CLIENTS</Text></Box>
      <Box w="100%" padding={"1rem"} _hover={{bg:"gray",color:"white"}} bg="white"><Text as="b" >SETTINGS</Text></Box>
     
    </Box>
  );
};

export default Sidebar;
