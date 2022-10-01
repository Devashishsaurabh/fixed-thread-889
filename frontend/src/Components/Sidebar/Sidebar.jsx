import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"

const Sidebar = () => {
    const navigate= useNavigate()
  return (
    <Box bg="white" w="18%" p={4} color="black" display={"flex"} flexDirection="column" gap="2rem"  >
      <Box w="100%" padding={"1rem"} _hover={{bg:"gray",color:"white"}} bg="white" onClick={()=>navigate("/clockify/")}><Text as="b" >TIME TRACKER</Text></Box>
      <Box w="100%" padding={"1rem"} _hover={{bg:"gray",color:"white"}} bg="white"><Text as="b" >CALENDAR</Text></Box>
      <Box w="100%" padding={"1rem"} _hover={{bg:"gray",color:"white"}} bg="white" onClick={()=>navigate("/clockify/dashboard")}><Text as="b" >DASHBOARD</Text></Box>
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
