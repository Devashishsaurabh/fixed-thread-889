import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineAim } from "react-icons/ai";
import { BsArrowRight, BsPeopleFill, BsClock } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";

const TrackCard = ({ id, heading, text }) => {
  return (
    <Stack
      _hover={{ boxShadow: "2xl", cursor: "pointer" }}
      p="20px"
      spacing={5}
      boxShadow="md"
      rounded="md"
      bg="white"
      h="auto"
    >
      <Box color="#03a9f4" fontSize={50}>
        {id == 1 && <AiOutlineAim />}
        {id == 2 && <BiDollarCircle />}
        {id == 3 && <BsPeopleFill />}
        {id == 4 && <BsClock />}
      </Box>
      <Text color="black">{heading}</Text>
      <Text color="gray">{text}</Text>
      <HStack color="#03a9f4">
        <Text>Learn more </Text>
        <BsArrowRight />
      </HStack>
    </Stack>
  );
};

export default TrackCard;
