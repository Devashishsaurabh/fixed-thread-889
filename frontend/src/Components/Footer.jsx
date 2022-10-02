import React from "react";
import { Flex, Box, Heading, Text, Stack, HStack } from "@chakra-ui/react";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";
import Card from "./HomeSections/Card";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Flex py="40px" px="5px" bg="white" w="100%" h="auto">
      <Box w={["100%", "90%", "80%", "80%"]} m="auto" h="100%" bg="white">
        <Flex
          h="70%"
          w="100%"
          bg="white"
          flexDirection={["column", "column", "row", " row"]}
        >
          <Stack w={["100%", "100%", "25%", "25%"]} h="100%" bg="white">
            <Heading color="#03a9f4">Clockify</Heading>
            <Text color="gray" fontSize={13}>
              The world's leading time tracker and timesheet software for teams
            </Text>
            <Link to="/signup">
              <Text color="gray">SIGN UP FREE</Text>
            </Link>
            <Link to="/login">
              <Text color="gray">LOG IN</Text>
            </Link>
          </Stack>
          <Flex
            justifyContent="space-between"
            w={["100%", "100%", "75%", "75%"]}
            h="100%"
            flexDirection={["column", "row", "row", " row"]}
          >
            <Card
              arr={[
                "PRODUCT",
                "Features",
                "Download",
                "Integrations",
                "Upgrade",
                "API",
              ]}
            />
            <Card
              arr={[
                "SOLUTION",
                "Timekeeping",
                "Management",
                "Reporting",
                "Business",
                "Calculators",
              ]}
            />
            <Card
              arr={[
                "COMPANY",
                "About us",
                "Customers",
                "WE ALSO MAKE",
                "pumble",
                "plaky",
              ]}
            />
            <Card
              arr={[
                "SUPPORT",
                "Help",
                "Tutorials",
                "Resources",
                "Blog",
                "Contact",
              ]}
            />
          </Flex>
        </Flex>
        <Stack mt="30px" spacing={10} h="30%" w="100%" bg="white">
          <Flex
            justifyContent={["space-between"]}
            flexDirection={["column", "column", "row", " row"]}
          >
            <Stack
              direction={["column", "row", "row", "row", "row"]}
              color="gray"
              spacing={["1", "5", "10", "10"]}
            >
              <Text _hover={{ cursor: "pointer", color: "white" }}>
                © 2022 Clockify
              </Text>
              <Text _hover={{ cursor: "pointer", color: "white" }}>
                Sitemap
              </Text>
              <Text>Cookies</Text>
              <Text>Terms</Text>
              <Text _hover={{ cursor: "pointer", color: "black" }}>
                Privacy
              </Text>
              <Text _hover={{ cursor: "pointer", color: "black" }}>
                Security
              </Text>
            </Stack>
            <HStack _hover={{ cursor: "pointer", color: "black" }} color="gray">
              <BsTwitter />
              <BsFacebook />
              <BsInstagram />
              <BsYoutube />
              <BsLinkedin />
            </HStack>
          </Flex>
          <Flex
            justifyContent="space-between"
            flexDirection={["column", "column", "row", " row"]}
          >
            <HStack color="gray" spacing={10}>
              <Text>
                COING Inc, 2100 Geng Road, Suite 210, Palo Alto, CA 94303, USA,
                +1-855-738-8741
              </Text>
            </HStack>
            <HStack _hover={{ cursor: "pointer", color: "black" }} color="gray">
              <RiGlobalLine />
              <Text>ENGLISH</Text>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Footer;
