import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useRef, useState } from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsTags } from 'react-icons/bs';

const TimeTracker = () => {
  

 
  return (
    <Box w="80vw" h="50vh" border={"1px solid red"}>
     <Flex w="80%" border={"1px solid red"} m="auto" p="1rem" justifyContent={"space-between"}>
     <Textarea w="40%" placeholder='Here is a sample placeholder' />
     <Flex w="10%" >
      <AiOutlinePlusCircle fontSize={"30px"}/>
      <Text>Project</Text>
      </Flex>
     <Box w="10%"><BsTags fontSize={"30px"}/></Box>
     <Box w="10%">Time</Box>
     <Button width={"15%"}>add</Button>
     </Flex>
    </Box>
  )
}

export default TimeTracker