import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Project = () => {
  return (
   <Box w="80vw" h="100vh"  bg="#e4eaee" ml="21rem">
    <Flex w="90%" border={"1px solid red"} m="auto" justifyContent={"space-between"} alignItems="center">
        <Text as="b" fontSize={"2rem"} p="1rem">Projects</Text>
        <Button p="1rem" bg="#03a9f4">Create new Project</Button>
    </Flex>
   </Box>
  )
}

export default Project