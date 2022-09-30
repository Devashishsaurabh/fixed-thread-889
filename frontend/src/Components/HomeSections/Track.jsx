import { Box, Button, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import TrackCard from "./TrackCard";

const Track = () => {
  return (
    <Box py={30} w="100%" bg="white" h="auto">
      <Box color="black" textAlign="center">
        <Heading fontSize={["20", "20", "25", "28"]}>
          Why track time with Clockify
        </Heading>
      </Box>
      <Grid
        m="auto"
        w={["100%", "90%", "75%", "65%"]}
        h="auto"
        p="20px"
        bg="white"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={["2", "3", "5", "10"]}
      >
        <TrackCard />
        <TrackCard />
        <TrackCard />
        <TrackCard />
      </Grid>
      <Box textAlign="center">
        <Text color="gray">MORE USE CASES</Text>
      </Box>
      <Box my="10px" textAlign="center">
        <Button colorScheme="teal" variant="outline">
        Time Clock
        </Button>{" "}
        <Button colorScheme="teal" variant="outline">
        Work Hours Tracker
        </Button>{" "}
        <Button colorScheme="teal" variant="outline">
        Employee Time Tracker
        </Button>{" "}
        <Button colorScheme="teal" variant="outline">
        Attendance Tracker
        </Button>{" "}
        <Button colorScheme="teal" variant="outline">
        Task Timer
        </Button>{" "}
        <Button colorScheme="teal" variant="outline">
        Time Card Calculator
        </Button>
      </Box>
    </Box>
  );
};

export default Track;
