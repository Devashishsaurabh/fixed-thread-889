import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SupportCard from "./SupportCard";

const Support = () => {
  const arr = [
    {
      data: "24/7",
      text: "support anytime, anywhere",
    },
    {
      data: "1h",
      text: "average response time",
    },
    {
      data: "95%",
      text: "satisfaction score",
    },
    {
      data: "99.99%",
      text: "highest uptime levels",
    },
  ];
  return (
    <Stack py="50px" bg="white" w="100%" h="auto">
      <Stack textAlign="center">
        <Text color="gray">#1 SUPPORT IN SOFTWARE</Text>
        <Text fontSize={30} color="black">
          World-class customer support
        </Text>
        <Text fontSize={23} color="gray.600">
          We're here 24 hours a day, every day of the week, including holidays.
        </Text>
      </Stack>
      <Flex
        py="10px"
        alignItems="center"
        m="auto"
        justifyContent="center"
        flexDirection={["column", "row", "row", " row"]}
      >
        {arr.map(({ data, text }) => {
          return (
            <>
              <SupportCard date={data} text={text} />
            </>
          );
        })}
      </Flex>
      <Box textAlign="center">
        <Button colorScheme="teal" variant="outline">
          Contact us
        </Button>
        <Text color="gray">EMAIL • PHONE • CHAT</Text>
      </Box>
    </Stack>
  );
};

export default Support;
