import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
const RatingCard = ({ title, para, author }) => {
  return (
    <Stack
      textAlign="left"
      boxShadow="2xl"
      p="6"
      rounded="md"
      bg="white"
      w="auto"
      h="auto"
    >
      <HStack spacing={1} fontSize={10} color="gold">
        <BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill />{" "}
        <BsFillStarFill />
        <BsFillStarFill />
      </HStack>
      <Text fontWeight="bold" color="black" fontSize={14}>
        {title}
      </Text>
      <Text color="gray" fontSize={10}>
        {para}
      </Text>
      <Text fontSize={9} color="gray.600">
        {author}
      </Text>
    </Stack>
  );
};

export default RatingCard;
