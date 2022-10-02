import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsPeopleFill } from "react-icons/bs";

const Tracking = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="aliceblue"
      w="100%"
      h="auto"
      py="100px"
      flexDirection="column"
      gap="20px"
    >
      <Box>
        <Heading textAlign="center" color="black">
          Start tracking time with Clockify
        </Heading>
      </Box>
      <Button colorScheme="blue" variant="solid">
        CREATE FREE ACCOUNT
      </Button>
      <HStack>
        <BsPeopleFill color="black" />{" "}
        <Text color="gray"> 147,329 people signed up last month</Text>
      </HStack>
    </Flex>
  );
};

export default Tracking;
