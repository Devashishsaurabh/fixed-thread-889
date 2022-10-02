import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function UpgradeCompo() {
  const handlepay = (e) => {
    // console.log(e.target.value);
    // if (e.target.value === "a") {
    //   removeItem("payment");
    //   setItem("payment", 4.99);
    // } else if (e.target.value === "b") {
    //   removeItem("payment");
    //   setItem("payment", 9.99);
    // } else {
    //   removeItem("payment");
    //   setItem("payment", 6.99);
    // }
  };
  return (
    <div>
      <Box py={12} w="80%" m="auto">
        <Stack direction={["column", "row"]} justify="end" spacing="24px">
          <Button
            justifyContent="right"
            border="1px"
            textAlign={"cent"}
            borderColor="blue.200"
            color="blue.300"
          >
            SCHEDULE LIVE DEMO
          </Button>
          <Button colorScheme="blue">ACTIVATE FREE TRIAL NOW</Button>
        </Stack>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Get more features
          </Heading>
          <Text fontSize="lg" color={"gray.500"}>
            Upgrade your workspace to use advanced features.
          </Text>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" color={"black"} fontSize="2xl">
                BASIC
              </Text>
              <Text fontWeight="300" color={"black"} fontSize="md">
                Administration
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="500">
                  <span style={{ fontSize: "28px" }}>$</span>
                  4.<span style={{ fontSize: "15px" }}>99</span>
                </Text>
              </HStack>
              <Text mt="0.6rem">per seat</Text>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              mt={-10}
              borderBottomRadius={"xl"}
            >
              <Box w="80%" pt={7}>
                <Link to={""}>
                  <Button
                    w="full"
                    onClick={(e) => handlepay(e)}
                    value={"a"}
                    colorScheme="blackAlpha"
                  >
                    Upgrade
                  </Button>
                </Link>
              </Box>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Add time for others
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Hide time and pages
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Required fields
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Bulk edit
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Decimal format
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Time audit
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Customize exports
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Project templates
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Historic rates
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Edit profiles
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Import timesheets
                </ListItem>
              </List>
            </VStack>
          </PriceWrapper>
          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue("red.300", "red.700")}
                  px={3}
                  py={1}
                  color={useColorModeValue("gray.900", "gray.300")}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  Most Popular
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Text fontWeight="500" color={"red.500"} fontSize="2xl">
                  PRO
                </Text>
                <Text fontWeight="300" color={"red.500"} fontSize="md">
                  Profit & Productivity
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" color={"red.500"} fontWeight="500">
                    <span style={{ fontSize: "28px" }}>$</span>
                    9.<span style={{ fontSize: "15px" }}>99</span>
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <Text>per seat</Text>
                <Box w="80%" pt={7}>
                  <Link to={""}>
                    <Button
                      w="full"
                      onClick={(e) => handlepay(e)}
                      value={"b"}
                      colorScheme="red"
                    >
                      UPGRADE
                    </Button>
                  </Link>
                </Box>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>All STANDARD FEATURES</ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Scheduling
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Expenses
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    GPS tracking
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Screenshots
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Force timer
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Labor cost & profit
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Scheduled reports
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Budget & estimates
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Alerts
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Custom fields
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    User fields
                  </ListItem>
                </List>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" color={"blue"} fontSize="2xl">
                STANDARD
              </Text>
              <Text fontWeight="300" color={"blue"} fontSize="md">
                Timesheeting & Billing
              </Text>
              <HStack justifyContent="center">
                <Text color={"blue"} fontSize="3xl" fontWeight="500">
                  <span style={{ fontSize: "28px" }}>$</span>
                  6.<span style={{ fontSize: "15px" }}>99</span>
                </Text>
              </HStack>
              <Text mt="0.6rem">per seat</Text>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              mt={-10}
              borderBottomRadius={"xl"}
            >
              <Box w="80%" pt={7}>
                <Link to={""}>
                  <Button
                    w="full"
                    onClick={(e) => handlepay(e)}
                    value={"c"}
                    colorScheme="blue"
                  >
                    Upgrade
                  </Button>
                </Link>
              </Box>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>All BASIC features</ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Time off
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Invoicing
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Approval
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Manager role
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lock timesheet
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Targets & reminders
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Task rates
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Rounding
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  QuickBooks Integration
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Force 2FA
                </ListItem>
              </List>
            </VStack>
          </PriceWrapper>
        </Stack>
      </Box>
      <Box textAlign={"center"} mb="2.5rem" w="80%">
        <Text color={"#999999"}>Trusted by thousands of companies</Text>
      </Box>
      <SimpleGrid w="80%" m="auto" columns={[2, 4, 8]} spacing="5px">
        <Box height="80px">
          <img
            src="https://app.clockify.me/assets/clients-logos/Group1.svg"
            alt=""
          />
        </Box>
        <Box height="80px">
          <img
            src="https://app.clockify.me/assets/clients-logos/Group2.svg"
            alt=""
          />
        </Box>
        <Box height="80px">
          <img
            src="https://app.clockify.me/assets/clients-logos/Group3.svg"
            alt=""
          />
        </Box>
        <Box height="80px">
          <img
            src="https://app.clockify.me/assets/clients-logos/Group5.svg"
            alt=""
          />
        </Box>
        <Box height="80px">
          <img
            src="https://app.clockify.me/assets/clients-logos/Group6.svg"
            alt=""
          />
        </Box>
        <Box height="80px">
          <img
            src="https://app.clockify.me/assets/clients-logos/Group7.svg"
            alt=""
          />
        </Box>
        <Box height="80px">
          <img
            src="https://app.clockify.me/assets/clients-logos/Group8.svg"
            alt=""
          />
        </Box>
        <Box height="80px">
          <img
            src="https://app.clockify.me/assets/clients-logos/Group10.svg"
            alt=""
          />
        </Box>
      </SimpleGrid>

      <Box textAlign={"center"} mb="2.5rem" w="80%">
        <Text fontWeight={"600"} fontSize={"2xl"} color={"#666666"}>
          Frequently asked questions
        </Text>
      </Box>
      <SimpleGrid columns={[1, 1, 2]} spacing="40px" w="80%" m="auto">
        <Box height="80px">
          <Text fontWeight={"700"} fontSize={"lg"}>
            Can I try it out first?
          </Text>
          <Text>
            Absolutely! You can start trial and try out all the PRO features for
            free for 7 days, no credit card required.
          </Text>
        </Box>
        <Box height="150px">
          <Text fontWeight={"700"} fontSize={"lg"}>
            Do you offer refunds?
          </Text>
          <Text>
            We don't offer refunds. But, if you were mistakenly charged due to
            system error, contact us and we'll immediately issue you a refund.
            If you wish to test extra features, we recommend activating the free
            trial first, before making any payment.
          </Text>
        </Box>
        <Box height="130px">
          <Text fontWeight={"700"} fontSize={"lg"}>
            What is a seat?
          </Text>
          <Text>
            Each active user in your paid workspace requires one user seat. If
            you don't have an available seat, you won't be able to invite a new
            user. If you plan on adding more users, you can pay additional seats
            in advance.
          </Text>
        </Box>
        <Box height="110px">
          <Text fontWeight={"700"} fontSize={"lg"}>
            What types of payment are supported?
          </Text>
          <Text>
            We support payments by credit card for all plans. We support wire
            transfers and purchase orders for ENTERPRISE plan (annual billing,
            over 50 seats).
          </Text>
        </Box>
        <Box height="150px">
          <Text fontWeight={"700"} fontSize={"lg"}>
            Can I switch between plans?
          </Text>
          <Text>
            Yes. When you switch to a higher plan, you'll immediately get new
            features and be charged a prorated price for that month. When you
            downgrade, you'll be switched to the downgraded plan once your
            current (higher) plan ends.
          </Text>
        </Box>
        <Box height="150px">
          <Text fontWeight={"700"} fontSize={"lg"}>
            Are there any additional taxes?
          </Text>
          <Text>
            No, we take care of all the taxes. The price you see is what you'll
            get charged. You can enter your Tax ID, but it will only be used as
            an additional piece of information on your invoices.
          </Text>
        </Box>
      </SimpleGrid>
    </div>
  );
}
