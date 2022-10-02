import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Free = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      height="auto"
      bg="aliceblue"
      py="100px"
    >
      <Flex
        justifyContent="space-evenly"
        flexDirection={["column", "column", "row", " row"]}
        w="60%"
        h="auto"
      >
        <Box w="200px">
          <Image src="https://clockify.me/assets/images/free-forever-clock-4.svg" />
        </Box>
        <Stack mt="50px" spacing={5}>
          <Box>
            <Heading color="#03a9f4" as="h2" size="4xl" noOfLines={1}>
              FREE
            </Heading>
            <Heading color="#03a9f4" as="h2" size="xl">
              FOREVER!
            </Heading>
          </Box>
          <Box>
            <Text color="gray">✓ Unlimited users</Text>
            <Text color="gray">✓ Unlimited tracking</Text>
            <Text color="gray">✓ Unlimited projects</Text>
          </Box>
          <Link color="#03a9f4">Upgrade →</Link>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Free;
