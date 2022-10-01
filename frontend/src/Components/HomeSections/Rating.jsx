import { Box, Grid, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import RatingCard from "./RatingCard";

const Rating = () => {
  const arr = [
    {
      title: "A game-changer for remote work",
      para: "I can track on my phone - a few taps and I'm ready to get onto my work.",
      author: " — Kerri MacKay, Coordinator",
    },
    {
      title: "It has greatly improved our business",
      para: "Before Clockify we had no idea of how long we were spending on each event.",
      author: "— Hilary Raeside, Executive Assistant",
    },
    {
      title: "Grows with you!",
      para: "I love how Clockify allows my contractors to independently log billable hours.",
      author: "— Cameron Suorsa, Entrepreneur",
    },
    {
      title: "An amazing experience!",
      para: "Works exactly like you'd hope, feature-rich, and has helped us realize profits.",
      author: "— Torre Capistran, Entrepreneur",
    },
    {
      title: "Affordable price and support",
      para: "New features appearing every month. Great and helpful customer support.",
      author: "— Maciej Tkaczyk, Manager",
    },
    {
      title: "Fantastic from start to finish",
      para: "I absolutely love how this software has so many features",
      author: "— Ollie Yates, CEO",
    },
    {
      title: "The only app to keep you accountable",
      para: "The best app out there which allows us to keep a tab on our productivity.",
      author: "— Ze Belchior, Managing Director",
    },
    {
      title: "One of the best values available online",
      para: "Really good. Overall, this is a TREMENDOUS value for the price.",
      author: "— Patrick Carver, Entrepreneur",
    },
    {
      title: "Best time tracker",
      para: "Clockify has become a basic in my set of freelance tools.",
      author: "— Luis Miguel Rivas Zepeda, Software Engineer",
    },
    {
      title: "Seamless time tracking",
      para: "Clockify is so easy to use and intuitive. The learning curve is almost none.",
      author: "— Sheila Zayas, Graphic Design",
    },
    {
      title: "Clockify is scary good!",
      para: "It is a powerful and often frightening insight into your own behavior.",
      author: "— Skyler Bird, Web Designer",
    },
    {
      title: "Finally an intuitive online time logger",
      para: "I like that it is available to me online and can use it wherever I am.",
      author: "— Michele Wong, Entrepreneur",
    },
    {
      title: "Amazing timer that gets the job done",
      para: "Gives a very clear idea about where my time is being spent. It helps in self-development!",
      author: "— Anirudh Kshemendranath, Consulting Analyst",
    },
    {
      title: "Must-use productivity software",
      para: "Time-tracking is smoother, productivity is easier.",
      author: "— Ellen Mubwanda, Copywriter",
    },
    {
      title: " May be the best time tracker there is!",
      para: "Clockify has been an essential tool for our team to track time on a daily basis.",
      author: "— Camille Ang, Entrepreneur",
    },
    {
      title: "Works great for startups",
      para: "We grew from a couple people to almost 80 and it worked perfectly the whole time!",
      author: "— Zachary Gaskill, Sales Manager",
    },
    {
      title: "Fantastic",
      para: "Makes it incredibly easy to record time and attach pdf reports to invoices.",
      author: "— David Jackson, Consultant",
    },
    {
      title: "Best time tracking software!",
      para: "I use Clockify for work, but it also lets me know exactly what I am doing in my day!",
      author: " — Marc Wolfe, Marketing Manager",
    },
    {
      title: "Great Experience!",
      para: "I use Clockify for work, but it also lets me know exactly what I am doing in my day!",
      author: " — Marc Wolfe, Marketing Manager",
    },
    {
      title: "Best software!",
      para: "It is a powerful and often frightening!",
      author: " — Marc Wolfe, Marketing Manager",
    },
  ];

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
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(5, 1fr)",
        ]}
        gap={[0, 3, 4, 5, 10]}
        w="100%"
        h="auto"
        p="20px"
      >
        {arr.map(({ title, para, author }) => {
          return (
            <>
              <RatingCard title={title} para={para} author={author} />
            </>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Rating;
