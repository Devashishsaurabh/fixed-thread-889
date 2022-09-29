import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineAim } from "react-icons/ai";
import {BsArrowRight} from 'react-icons/bs';

const TrackCard = () => {
  return (
    <Stack _hover={{boxShadow:"2xl" , cursor:"pointer"}} p="20px" spacing={5} boxShadow="md" rounded="md" bg="white" h="auto">
      <Box color="#03a9f4" fontSize={50}>
        <AiOutlineAim />
      </Box>
      <Text color="black">Boost Productivity</Text>
      <Text color="gray">
        Track time you spend on activities, see where your time goes, and
        improve your time management skills.
      </Text>
      <HStack color="#03a9f4">
        <Text>Learn more </Text><BsArrowRight />
      </HStack>
    </Stack>
  );
};

export default TrackCard;
