import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, Element } from "react-scroll";
import { Link as RLink } from "react-router-dom";
import React from "react";

const Features = () => {
  return (
    <Box margin={"auto"} align={"center"} justify={"center"} marginTop={"80px"}>
      {/* Top-Part */}
      <Stack
        width={"80%"}
        borderBottom={"1px solid lightgray"}
        textAlign={"center"}
      >
        <Heading marginBottom={"10px"} fontWeight="normal">
          Features
        </Heading>
        <Center>
          <SimpleGrid
            width={"80%"}
            columns={[1, 2, 3]}
            spacing="30px"
            paddingBottom={"30px"}
          >
            <Box>
              <Heading size="sm">TIMEKEEPING</Heading>
              <SimpleGrid marginTop={"10px"} columns="3" spacing="5px">
                <Button
                  fontWeight={"normal"}
                  size="md"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="timetracker" smooth={true} duration={500}>
                    Time Tracker
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="md"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="kisok" smooth={true} duration={500}>
                    Kiosk
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="md"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="apps" smooth={true} duration={500}>
                    Apps
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="md"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="timesheet" smooth={true} duration={500}>
                    Time Sheet
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="md"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="calender" smooth={true} duration={500}>
                    Calender
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="md"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="interagation" smooth={true} duration={500}>
                    Integrations
                  </Link>
                </Button>
              </SimpleGrid>
            </Box>
            <Box>
              <Heading size="sm">REPORTING</Heading>
              <SimpleGrid marginTop={"10px"} columns="2" spacing="7px">
                <Button
                  fontWeight={"normal"}
                  size="sm"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="dashboard" smooth={true} duration={500}>
                    Dashboard
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="sm"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="activity" smooth={true} duration={500}>
                    Activity
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="sm"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="reports" smooth={true} duration={500}>
                    Reports
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="sm"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="projects" smooth={true} duration={500}>
                    Projects
                  </Link>
                </Button>
              </SimpleGrid>
            </Box>
            <Box>
              <Heading size="sm">MANAGEMENT</Heading>
              <SimpleGrid marginTop={"10px"} columns="3" spacing="7px">
                <Button
                  fontWeight={"normal"}
                  size="sm"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="team" smooth={true} duration={500}>
                    Team
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="sm"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="timeoff" smooth={true} duration={500}>
                    Time Off
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="sm"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="expenses" smooth={true} duration={500}>
                    Expenses
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="sm"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="scheduling" smooth={true} duration={500}>
                    Scheduling
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="sm"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="approval" smooth={true} duration={500}>
                    Approval
                  </Link>
                </Button>
                <Button
                  fontWeight={"normal"}
                  size="sm"
                  _hover={{ bg: "blue.400", color: "white" }}
                  color="black"
                  colorScheme="gray"
                >
                  <Link to="invoicing" smooth={true} duration={500}>
                    Invoicing
                  </Link>
                </Button>
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </Center>
      </Stack>
      {/* TimeKeeping - part */}
      <Container maxW={"-moz-fit-content"} py={16} as={Stack} spacing={12}>
        <Stack
          width={"-moz-fit-content"}
          align={"center"}
          paddingBottom={"30px"}
        >
          <Element name="timetracker">
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Time tracker</Heading>
              <Text>
                Start and stop timer as you work, or enter hours manually.
              </Text>
            </Stack>
          </Element>
          <Stack align={"center"} position={"relative"}>
            <Image
              src={
                "https://clockify.me/assets/images/features/features-tracker-screenshot.svg"
              }
              width={"95%"}
              display="block"
              zIndex="1"
            />
            <Image
              src={
                "https://clockify.me/assets/images/features/features-tracker-explainer.svg"
              }
              display="none"
              position={"absolute"}
              left="0"
              top="-10"
              zIndex="999"
              _hover={{ display: "inline" }}
            />
          </Stack>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            paddingLeft={[3, 6, 10]}
            gap={[20, 12, 6]}
          >
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Timer
              </Heading>
              <Text>Track time using a stopwatch.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Add Time
              </Heading>
              <Text>Enter and edit hours manually.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Continue
              </Heading>
              <Text>Continue tracking with one click.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Billable
              </Heading>
              <Text>Mark hours as billable.</Text>
            </GridItem>
          </Grid>
        </Stack>

        <Stack
          width={"-moz-fit-content"}
          align={"center"}
          padding={"50px 0px"}
          bg={"#f7fcff"}
        >
          <Element name="timesheet">
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Timesheet</Heading>
              <Text>Log your weekly activities in less than a minute.</Text>
            </Stack>
          </Element>
          <Stack align={"center"}>
            <Image
              src={
                "https://clockify.me/assets/images/features/features-timesheet-screenshot.svg"
              }
              width={"90%"}
            />
          </Stack>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            paddingLeft={[3, 6, 10]}
            gap={[20, 12, 6]}
          >
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Activities
              </Heading>
              <Text>Select activity and enter time.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Templates
              </Heading>
              <Text>Quickly load activities each week.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Approval
              </Heading>
              <Text>Submit and approve timesheets.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Reminders
              </Heading>
              <Text>Reminder for due timesheets.</Text>
            </GridItem>
          </Grid>
        </Stack>

        <Stack width={"-moz-fit-content"} align={"center"} padding={"50px 0px"}>
          <Element name="kisok">
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Kiosk</Heading>
              <Text>Clock in with your PIN code from a shared device.</Text>
            </Stack>
          </Element>
          <Stack align={"center"}>
            <Image
              src={
                "https://clockify.me/assets/images/features/features-kiosk-screenshot.png"
              }
              width={"90%"}
            />
          </Stack>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            paddingLeft={[3, 6, 10]}
            gap={[20, 12, 6]}
          >
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Clock-in
              </Heading>
              <Text>Punch in from a shared device.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Breaks
              </Heading>
              <Text>Track employee breaks.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                PIN
              </Heading>
              <Text>Sign in with personal code.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Activity
              </Heading>
              <Text>See how much you've worked.</Text>
            </GridItem>
          </Grid>
        </Stack>

        <Stack
          width={"-moz-fit-content"}
          align={"center"}
          padding={"50px 0px"}
          bg={"#f7fcff"}
        >
          <Element name="calender">
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Calender</Heading>
              <Text>Visualize your time and block out activities.</Text>
            </Stack>
          </Element>
          <Stack align={"center"}>
            <Image
              src={
                "https://clockify.me/assets/images/features/features-calendar-screenshot.svg"
              }
              width={"90%"}
            />
          </Stack>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            paddingLeft={[3, 6, 10]}
            gap={[20, 12, 6]}
          >
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Visualize
              </Heading>
              <Text>See how your day looks like.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Add
              </Heading>
              <Text>Block hours with a click.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Edit
              </Heading>
              <Text>Edit blocks by resizing.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Connect
              </Heading>
              <Text>Add events from Outlook/Google.</Text>
            </GridItem>
          </Grid>
        </Stack>
        <Stack width={"-moz-fit-content"} align={"center"} padding={"50px 0px"}>
          <Element name="apps">
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Apps</Heading>
              <Text>Track time using desktop and mobile app.</Text>
            </Stack>
          </Element>
          <Stack align={"center"}>
            <Image
              src={
                "https://clockify.me/assets/images/features/features-apps-screenshot.png"
              }
              width={"90%"}
            />
          </Stack>
        </Stack>

        <Stack
          width={"-moz-fit-content"}
          align={"center"}
          padding={"50px 0px"}
          bg={"#f7fcff"}
        >
          <Element name="interagation">
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Integrations</Heading>
              <Text>Connect Clockify with other apps.</Text>
            </Stack>
          </Element>
          <Stack align={"center"}>
            <Image
              src={
                "https://clockify.me/assets/images/features/features-tracker-screenshot.svg"
              }
              width={"90%"}
            />
          </Stack>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            paddingLeft={[3, 6, 10]}
            gap={[20, 12, 6]}
          >
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Timer
              </Heading>
              <Text>Track time using a stopwatch.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Add Time
              </Heading>
              <Text>Enter and edit hours manually.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Continue
              </Heading>
              <Text>Continue tracking with one click.</Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading size="md" fontWeight={"medium"}>
                Billable
              </Heading>
              <Text>Mark hours as billable.</Text>
            </GridItem>
          </Grid>
        </Stack>
      </Container>
      {/* Reporting - part */}
      <Container maxW={"-moz-fit-content"} py={16} as={Stack} spacing={12}>
        <Element name="dashboard">
          <Stack
            width={"-moz-fit-content"}
            align={"center"}
            paddingBottom={"30px"}
          >
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Dashboard</Heading>
              <Text>
                See where you spend time and what your team is working on.
              </Text>
            </Stack>
            <Stack align={"center"}>
              <Image
                src={
                  "https://clockify.me/assets/images/features/features-dashboard-screenshot.svg"
                }
                width={"90%"}
              />
            </Stack>
            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              paddingLeft={[3, 6, 10]}
              gap={[20, 12, 6]}
            >
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Activities
                </Heading>
                <Text>See where you spend most time</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Charts
                </Heading>
                <Text>All time and money at a glance.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Breakdowns
                </Heading>
                <Text>See what your team worked on.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Status
                </Heading>
                <Text>See who currently works on what.</Text>
              </GridItem>
            </Grid>
          </Stack>
        </Element>
        <Element name="reports">
          <Stack
            width={"-moz-fit-content"}
            align={"center"}
            padding={"50px 0px"}
            bg={"#f7fcff"}
          >
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Reports</Heading>
              <Text>
                See who worked on what, how much money you earn, review your
                team's time, and export the data.
              </Text>
            </Stack>
            <Stack align={"center"}>
              <Image
                src={
                  "https://clockify.me/assets/images/features/features-reports-screenshot.svg"
                }
                width={"90%"}
              />
            </Stack>
            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              paddingLeft={[3, 6, 10]}
              gap={[20, 12, 6]}
            >
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Breakdowns
                </Heading>
                <Text>Overview by: day, activity, user...</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Filters
                </Heading>
                <Text>Drill down into your data.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Share
                </Heading>
                <Text>Share reports with clients via link.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Exports
                </Heading>
                <Text>Download PDF, CSV, or Excel</Text>
              </GridItem>
            </Grid>
          </Stack>
        </Element>
        <Element name="activity">
          <Stack
            width={"-moz-fit-content"}
            align={"center"}
            padding={"50px 0px"}
          >
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Activity</Heading>
              <Text>See visited sites and what you've worked on.</Text>
            </Stack>
            <Stack align={"center"}>
              <Image
                src={
                  "https://clockify.me/assets/images/features/features-locations-screenshot.png"
                }
                width={"90%"}
              />
            </Stack>
            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              paddingLeft={[3, 6, 10]}
              gap={[20, 12, 6]}
            >
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Locations
                </Heading>
                <Text>Track GPS location.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Routes
                </Heading>
                <Text>See all visited locations.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Screenshots
                </Heading>
                <Text>Record what you've worked on.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Privacy
                </Heading>
                <Text>Control what data is gathered.</Text>
              </GridItem>
            </Grid>
          </Stack>
        </Element>
        <Element name="projects">
          <Stack
            width={"-moz-fit-content"}
            align={"center"}
            padding={"50px 0px"}
            bg={"#f7fcff"}
          >
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Projects</Heading>
              <Text>
                Track time on projects, and keep an eye on progress and budget.
              </Text>
            </Stack>
            <Stack align={"center"}>
              <Image
                src={
                  "https://clockify.me/assets/images/features/features-projects-screenshot.svg"
                }
                width={"90%"}
              />
            </Stack>
            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              paddingLeft={[3, 6, 10]}
              gap={[20, 12, 6]}
            >
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Tasks
                </Heading>
                <Text>Categorize by job type.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Rates
                </Heading>
                <Text>Multiple levels of hourly rates.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Budgets
                </Heading>
                <Text>Set budget or time estimate.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Alerts
                </Heading>
                <Text>Get notified when close to budget.</Text>
              </GridItem>
            </Grid>
          </Stack>
        </Element>
      </Container>
      {/* Management */}
      <Container maxW={"-moz-fit-content"} as={Stack} spacing={12}>
        <Element name="team">
          <Stack
            width={"-moz-fit-content"}
            align={"center"}
            paddingBottom={"30px"}
          >
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Teams</Heading>
              <Text>Invite your team to track time in your account.</Text>
            </Stack>
            <Stack align={"center"}>
              <Image
                src={
                  "https://clockify.me/assets/images/features/features-team-screenshot.svg"
                }
                width={"90%"}
              />
            </Stack>
            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              paddingLeft={[3, 6, 10]}
              gap={[20, 12, 6]}
            >
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Invite Team
                </Heading>
                <Text>Unlimited number of users, free.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Rates
                </Heading>
                <Text>Set per user hourly rates.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Managers
                </Heading>
                <Text>Give additional permissions.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Groups
                </Heading>
                <Text>Manage access using groups.</Text>
              </GridItem>
            </Grid>
          </Stack>
        </Element>
        <Element name="scheduling">
          <Stack
            width={"-moz-fit-content"}
            align={"center"}
            padding={"50px 0px"}
            bg={"#f7fcff"}
          >
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Scheduling</Heading>
              <Text>Plan projects and visualize team's capacity.</Text>
            </Stack>
            <Stack align={"center"}>
              <Image
                src={
                  "https://clockify.me/assets/images/features/features-scheduling-projects-screenshot.svg"
                }
                width={"90%"}
              />
            </Stack>
            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              paddingLeft={[3, 6, 10]}
              gap={[20, 12, 6]}
            >
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Milestones
                </Heading>
                <Text>Visualize projects on timeline.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Assignments
                </Heading>
                <Text>Decide who works on what.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Capcity
                </Heading>
                <Text>See who can take on more work.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Publish
                </Heading>
                <Text>Let others see their assignments.</Text>
              </GridItem>
            </Grid>
          </Stack>
        </Element>
        <Element name="timeoff">
          <Stack
            width={"-moz-fit-content"}
            align={"center"}
            padding={"50px 0px"}
          >
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Time Off</Heading>
              <Text>Track your team's holidays and time off requests.</Text>
            </Stack>
            <Stack align={"center"}>
              <Image
                src={
                  "https://clockify.me/assets/images/features/features-timeoff-screenshot.svg"
                }
                width={"90%"}
              />
            </Stack>
            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              paddingLeft={[3, 6, 10]}
              gap={[20, 12, 6]}
            >
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Policies
                </Heading>
                <Text>Create time off policies</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Holidays
                </Heading>
                <Text>Define holidays for paid leaves</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Requests
                </Heading>
                <Text>Request and approve leaves.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Balance
                </Heading>
                <Text>Track available days/hours.</Text>
              </GridItem>
            </Grid>
          </Stack>
        </Element>
        <Element name="approval">
          <Stack
            width={"-moz-fit-content"}
            align={"center"}
            padding={"50px 0px"}
            bg={"#f7fcff"}
          >
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Approval</Heading>
              <Text>
                Officially approve your team's timesheets and expenses.
              </Text>
            </Stack>
            <Stack align={"center"}>
              <Image
                src={
                  "https://clockify.me/assets/images/features/features-approval-screenshot.svg"
                }
                width={"90%"}
              />
            </Stack>
            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              paddingLeft={[3, 6, 10]}
              gap={[20, 12, 6]}
            >
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Submit
                </Heading>
                <Text>Submit timesheets with one click.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Reminders
                </Heading>
                <Text>Send late timesheet reminders.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Immutablity
                </Heading>
                <Text>Prevent further changes.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  History
                </Heading>
                <Text>See all requests in one place.</Text>
              </GridItem>
            </Grid>
          </Stack>
        </Element>
        <Element name="expenses">
          <Stack
            width={"-moz-fit-content"}
            align={"center"}
            padding={"50px 0px"}
          >
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Expenses</Heading>
              <Text>Record fixed-fees and other project expenses.</Text>
            </Stack>
            <Stack align={"center"}>
              <Image
                src={
                  "https://clockify.me/assets/images/features/features-expenses-screenshot.svg"
                }
                width={"90%"}
              />
            </Stack>
            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              paddingLeft={[3, 6, 10]}
              gap={[20, 12, 6]}
            >
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Track
                </Heading>
                <Text>Record by sum or unit.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Types
                </Heading>
                <Text>Define expense types.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Receipts
                </Heading>
                <Text>Attach expense receipts.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Report
                </Heading>
                <Text>Analyze and export expenses</Text>
              </GridItem>
            </Grid>
          </Stack>
        </Element>
        <Element name="invoicing">
          <Stack
            width={"-moz-fit-content"}
            align={"center"}
            padding={"50px 0px"}
            bg={"#f7fcff"}
          >
            <Stack spacing={0} align={"center"}>
              <Heading fontWeight={"normal"}>Invoicing</Heading>
              <Text>
                Issue invoices based on tracked time, expenses, and hourly
                rates.
              </Text>
            </Stack>
            <Stack align={"center"}>
              <Image
                src={
                  "https://clockify.me/assets/images/features/features-invoicing-screenshot.svg"
                }
                width={"90%"}
              />
            </Stack>
            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              paddingLeft={[3, 6, 10]}
              gap={[20, 12, 6]}
            >
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Create
                </Heading>
                <Text>Import time and edit invoices.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  PDF
                </Heading>
                <Text>Download and send to client.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Costumize
                </Heading>
                <Text>Add company logo and notes.</Text>
              </GridItem>
              <GridItem w="100%" h="10">
                <Heading size="md" fontWeight={"medium"}>
                  Expenses
                </Heading>
                <Text>Record and invoice fixed fees.</Text>
              </GridItem>
            </Grid>
          </Stack>
        </Element>
      </Container>
      <Container maxW={"-moz-fit-content"} as={Stack} spacing={12}>
        <Stack width={"-moz-fit-content"} align={"center"} padding={"50px 0px"}>
          <Heading fontWeight={"medium"} color={"blue.400"}>
            Watch Demo (12:35)
          </Heading>
        </Stack>
        <AspectRatio
          maxWidth={["auto", "auto", "1061"]}
          maxHight={["auto", "auto", "597"]}
          ratio={3 / 1.5}
        >
          <iframe
            width="1061"
            height="597"
            src="https://www.youtube.com/embed/NMZhFs_b0Aw"
            title="Clockify Tour"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </AspectRatio>
        <Stack
          width={"-moz-fit-content"}
          align={"center"}
          padding={"50px 0px"}
          bg={"#f7fcff"}
        >
          <Heading
            mt={20}
            mb={2}
            align={"center"}
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
              <RLink to="/signup">
                <Text fontWeight={400} fontSize={["xs", "md"]}>
                  CREATE FREE ACCOUNT
                </Text>
              </RLink>
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
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  134,602 people signed up last month
                </a>
              </Text>
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Features;
