import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ arr }) => {
  return (
    <Stack>
      <Heading color="black" fontSize={20}>
        {arr[0]}
      </Heading>
      <Text _hover={{ color: "#03a9f4", cursor: "pointer" }} color="gray">
        {arr[1]}
      </Text>
      <Text _hover={{ color: "#03a9f4", cursor: "pointer" }} color="gray">
        {arr[2]}
      </Text>
      <Text _hover={{ color: "#03a9f4", cursor: "pointer" }} color="gray">
        {arr[3]}
      </Text>
      <Text _hover={{ color: "#03a9f4", cursor: "pointer" }} color="gray">
        {arr[4]}
      </Text>
      <Text _hover={{ color: "#03a9f4", cursor: "pointer" }} color="gray">
        {arr[5]}
      </Text>
    </Stack>
  );
};

export default Card;
