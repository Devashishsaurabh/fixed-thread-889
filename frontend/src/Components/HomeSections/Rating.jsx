import { Box, Grid, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import RatingCard from "./RatingCard";

const Rating = () => {
  const arr = new Array(20).fill(0);
  return (
    <Stack spacing={10} py="50px" bg="white" w="100%" h="auto">
      <Stack textAlign="center">
        <Text color="gray">#1 RATED SOFTWARE</Text>
        <Text fontSize={30} color="black">
          Join millions of happy users
        </Text>
        <Text fontSize={23} color="gray.600">
          Clockify is the best rated time tracking software with 4,000+ reviews.
        </Text>
      </Stack>
      <Box>
        <Image src="https://clockify.me/assets/images/customer-feedback-logo-expanded-3.svg" />
      </Box>
      <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)','repeat(5, 1fr)']} gap={[0,3,4,5,10]} w="100%" h="auto" p="20px">
        {arr.map((e) => {
          return (
            <>
              <RatingCard />
            </>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Rating;
