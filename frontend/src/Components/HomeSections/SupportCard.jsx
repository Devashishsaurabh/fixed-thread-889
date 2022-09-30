import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
const SupportCard = () => {
  return (
    <Flex justifyContent="space-between" w="140px" bg="white">
      <Box p="6px" fontSize={30} color="#03a9f4">
        <FiPhoneCall />
      </Box>
      <Box>
        <Text color="black" fontWeight="bold" fontSize={30}>24/7</Text>
        <Text fontSize={13} color="gray">support anytime, anywhere</Text>
      </Box>
    </Flex>
  );
};

export default SupportCard;
