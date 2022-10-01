import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Project = () => {
  return (
   <Box w="80vw" h="100vh"  bg="#f2f6f8" ml="21rem">
    <Flex w="90%"  m="auto" justifyContent={"space-between"} alignItems="center">
        <Text as="b" fontSize={"2rem"} p="1rem" color="#979b9a">Projects</Text>
        <Button p="1rem" bg="#03a9f4">Create new Project</Button>
    </Flex>

    <Flex border={"1px solid #c6d2d9"} w="80%" m="auto" p="1rem" gap="1rem" justifyContent={"space-between"}>
      <Box  p=".5rem" display="flex" >
        <Text as="b" color="#979b9a">FILTER</Text>
        <MdOutlineArrowDropDown/>
      </Box>

      <Box  p=".5rem" display={"flex"}>
        <Text as="b" color="#979b9a">ACTIVE</Text>
        <MdOutlineArrowDropDown/>
      </Box>
     

      <Box p=".5rem" display={"flex"}>
        <Text as="b" color="#979b9a">CLIENT</Text>
        <MdOutlineArrowDropDown/>
      </Box>

      <Box  p=".5rem" display={"flex"}>
        <Text as="b" color="#979b9a">ACCESS</Text>
        <MdOutlineArrowDropDown/>
      </Box>

      <Box p=".5rem" display={"flex"}>
        <Text as="b" color="#979b9a">BILLING</Text>
        <MdOutlineArrowDropDown/>
      </Box>

      <Flex  p=".5rem" gap="1rem" alignItems={"center"}>
        <BsSearch fontSize={"1.5rem"}/>
        <Input placeholder='Project name' />
      </Flex>

      <Button bg="white" border="1px solid #03a9f4">Apply Filter</Button>
    </Flex>
   </Box>
  )
}

export default Project