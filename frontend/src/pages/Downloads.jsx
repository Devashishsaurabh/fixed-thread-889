import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Button,
  Image,
  Badge,
  UnorderedList,
  ListItem,
  Tooltip,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";
import styles from "./download.style.module.css";
import { Link } from "react-router-dom";
const Downloads = () => {
  return (
    <Box>
      <Headers />

      <Box bg={"#f7fcff"} p="4rem">
        <Heading
          mt={20}
          mb={2}
          textAlign={"center"}
          fontWeight={"400"}
          size={["lg", "xl"]}
          color={"gray.600"}
        >
          Start tracking time with Clockify
        </Heading>
        <Text textAlign={"center"} fontSize={["xs", "sm"]} color={"gray"}>
          24/7 Support • Cancel Anytime • Free Forever
        </Text>
        <Flex flexDir={"column"} alignItems={"center"} mt={10}>
          <Button
            color={"white"}
            p={[1, 7]}
            boxShadow={"md"}
            _hover={{ bg: "blue.400" }}
            bgColor={"#03A9F4"}
            borderBottom={"4px solid #008CCF"}
            w={"280px"}
            h={"56px"}
          >
            <Link to="/">
              <Text fontWeight={400} fontSize={["xs", "md"]}>
                CREATE FREE ACCOUNT
              </Text>
            </Link>
          </Button>
          <Button
            p={0}
            colorScheme={"none"}
            color={"blue.400"}
            _hover={{ textDecoration: "underline" }}
          >
            <Image
              src={"https://clockify.me/assets/images/signed-up-icon.svg"}
            ></Image>
            <Text fontSize={"xs"} ml={"1"}>
              <Link to="/">134,602 people signed up last month</Link>
            </Text>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Downloads;

const Headers = () => {
  return (
    <Box align="center">
      <Box
        display="flex"
        justifyContent="center"
        fontSize="4xl"
        mt="5rem"
        gap={"2"}
      >
        <Heading
          fontWeight={"400"}
          size={["lg", "2xl"]}
          color={"gray.600"}
          pt="1"
          pb="4"
        >
          Time tracking apps
        </Heading>
      </Box>
      <Text>
        Install Clockify and track time from anywhere — everything is synced
        online.
      </Text>
      <Box>
        <Box pt="3" pb="3">
          <DeviceDiff />
        </Box>

        <Box w={["20rem", "35rem", "50rem"]}>
          <BadgeWrapper data={textWrite} />
        </Box>
        <VStack justifyContent="center">
          <PosterImg />
        </VStack>
      </Box>
    </Box>
  );
};
const DeviceApp = [
  "Chrome",
  "Firefox",
  "Mac",
  "Window",
  "Linux",
  "Android",
  "iOS",
];
const DeviceDiff = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      gap={["2", "3", "5"]}
      p={"2"}
      flexWrap={"wrap"}
    >
      {DeviceApp?.map((el, index) => (
        <UnorderedList key={index}>
          <ListItem
            cursor={"pointer"}
            color={"#03a9f4"}
            fontWeight={"600"}
            fontSize={["1.0rem", "1.2rem", "1.5rem"]}
            _hover={{ textDecoration: "underline" }}
          >
            {el}
          </ListItem>
        </UnorderedList>
      ))}
    </Box>
  );
};

const textWrite = [
  {
    name: "Idle detection",
    span: "Stop Timer from Tracking time you speed away fron your computer",
  },
  {
    name: " Auto start/stop",
    span: "Automatically start or stop the timer when you turn on your computer or browser.",
  },
  {
    name: " Offline mode",
    span: "Get notification when you forgatto start a timer.",
  },
  {
    name: " Default project",
    span: "Stop Timer from Tracking time you speed away fron your computer",
  },
  {
    name: "Reminders",
    span: "Get notification when you forgatto start a timer.",
  },
  { name: "Pomodoro timer" },
  {
    name: "Auto tracker",
    span: "Get notification when you forgatto start a timer.",
  },
  {
    name: "Expenses",
    span: "Stop Timer from Tracking time you speed away fron your computer",
  },
  {
    name: "Time off",
    span: "Get notification when you forgatto start a timer.",
  },
];

const BadgeWrapper = ({ data }) => {
  return (
    <>
      {data.map((el, index) => (
        <Tooltip
          key={index}
          label={el.span}
          hasArrow
          bg="black"
          color="#fff"
          placement="top"
        >
          <Badge
            bg="#e1f5fe"
            _hover={{ bg: "#03a9f4", color: "#fff" }}
            ml={"3"}
            mt="2"
            fontWeight
          >
            {" "}
            {el.name}
          </Badge>
        </Tooltip>
      ))}
    </>
  );
};

const PosterData = [
  {
    image: "https://clockify.me/assets/images/clockify-apps-extension.png",
    title: "Browser extension",
    span: "Track time via extension.",
    img: [
      "https://clockify.me/assets/images/chrome-store.svg",
      "https://clockify.me/assets/images/firefox-store.svg",
      "https://clockify.me/assets/images/edge-store.svg",
    ],
  },

  {
    image: "https://clockify.me/assets/images/clockify-apps-desktop.png",
    title: "Desktop app",
    span: "Track time on your computer.",
    img: [
      "https://clockify.me/assets/images/download-app-mac.svg",
      "https://clockify.me/assets/images/download-app-windows.svg",
      "https://clockify.me/assets/images/download-app-linux.svg",
    ],
  },

  {
    image: "https://clockify.me/assets/images/clockify-apps-mobile.png",
    title: "Mobile app",
    span: "Track time and expenses on your phone.",
    img: [
      "https://clockify.me/assets/images/app-store-ios.svg",
      "https://clockify.me/assets/images/play-store-android.svg",
    ],
  },

  {
    image: "https://clockify.me/assets/images/clockify-apps-kiosk.png",
    title: "Kiosk",
    span: "Set up a shared time clock kiosk on any device.",
    tags: ["TTBLET", "PHONE", "COMPUTER"],
    button: "Learn more",
  },

  {
    image: "https://clockify.me/assets/images/pumble-apps.png",
    title: "Chat app",
    span: "Chat via Pumble app (desktop and mobile).",
    img: [
      "https://clockify.me/assets/images/app-store-ios.svg",
      "https://clockify.me/assets/images/play-store-android.svg",
      "https://clockify.me/assets/images/download-app-mac.svg",
      "https://clockify.me/assets/images/download-app-windows.svg",
    ],
  },
];

const PosterImg = () => {
  return (
    <>
      {PosterData?.map(
        ({ title, image, span, img, tags, button }, index, el) => (
          <Box key={index} w={["20rem", "45rem", "53rem"]}>
            <Box
              className={styles.masterBox}
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"start"}
              mt="6rem"
              mb="6rem"
            >
              <Box display="flex" margin="auto" justifyContent="center">
                <Image src={image} className={styles.mainImage} />
              </Box>
              <Box className={styles.mainBoxSVG}>
                <Box>
                  <Text fontSize={"3xl"}> {title}</Text>
                  <Text pt="2" pb="5">
                    {span}
                  </Text>
                  <Box display={"flex"} gap={"3"} pt="2" pb="2">
                    {tags?.map((el, index) => (
                      <UnorderedList key={index}>
                        <ListItem>{el}</ListItem>
                      </UnorderedList>
                    ))}
                  </Box>
                  {button ? (
                    <Text color={"blue"} textAlign={"start"} fontSize={"1xl"}>
                      Lern more
                    </Text>
                  ) : null}
                </Box>

                <Box
                  className={styles.appSVG}
                  display="flex"
                  flexWrap="wrap"
                  width={["20rem", "25rem", "25rem"]}
                  gap="5"
                >
                  {img?.map((el, index) => (
                    <Image
                      key={index}
                      src={el}
                      className={styles.IconSVG}
                      _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#fdecec",
              }}
            ></div>
          </Box>
        )
      )}
    </>
  );
};
