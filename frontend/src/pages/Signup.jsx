import {
  Box,
  Flex,
  Image,
  Spacer,
  Text,
  FormControl,
  Input,
  Checkbox,
  Stack,
  Button,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSignup = () => {
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post(`https://clockify-api1.herokuapp.com/signup`, payload)
      .then((r) => {
        console.log(r.data);
        navigate("/login");
      })
      .catch(
        (e) => setError(true)
        // console.log(e)
      );
  };
  const handleGoogleLogin = async () => {
    await axios
      .get("https://clockify-api.herokuapp.com/auth/google", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Referrer-Policy": "no-referrer, strict-origin-when-cross-origin",
        },
      })
      .then((r) => {
        console.log(r);
        if (r.data.token) {
          localStorage.setItem("login_token", r.data.token);
          localStorage.setItem("email", r.data.email);
          navigate("/clockify/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Box bg={"#f2f6f8"} h={"auto"}>
      <Flex
        justifyContent={"center"}
        margin={"auto"}
        pt={"45px"}
        h={"140px"}
        w={"90%"}
      >
        <Box h={"100%"} w={"185px"}>
          <Image src="https://app.clockify.me/assets/logo.svg" h={"100%"} />
        </Box>
        <Spacer />
        <Box h={"100%"} w={"100px"}>
          <Link to="/login">
            <Text fontSize={"20px"} color={"#03a9f4"}>
              Log In
            </Text>
          </Link>
        </Box>
      </Flex>

      <Box
        justifyContent={"center"}
        margin={"auto"}
        h={"auto"}
        mt="30px"
        // w={"55%"}
        w={{ base: "100%", lg: "100%" }}
      >
        <Box>
          <Text
            justifyContent={"center"}
            margin={"auto"}
            h={"50px"}
            w={{ base: "100%", lg: "50%" }}
            letterSpacing={"-.05rem"}
            color={"#333"}
            fontSize={"50px "}
            lineHeight={"1.5"}
            mb={"30px"}
          >
            Get started with Clockify
          </Text>
          <Text
            justifyContent={"center"}
            margin={"auto"}
            h={"50px"}
            w={"85%"}
            letterSpacing={"-.05rem"}
            color={"#666"}
            fontSize={"26px"}
            fontWeight={"400"}
            lineHeight={"1.5"}
            mb={"20px"}
          >
            Create a free account to start tracking time and supercharge your
            productivity.
          </Text>
          <Text
            justifyContent={"center"}
            margin={"auto"}
            mt={{ base: "10px", lg: "-0.8rem" }}
            h={"50px"}
            w={"80%"}
            letterSpacing={"-.02rem"}
            color={"#999"}
            fontSize={"18px"}
            fontWeight={"498"}
            lineHeight={"1.5"}
          >
            No credit card required - Unsubscribe at any time
          </Text>
          <Box
            justifyContent={"center"}
            margin={"auto"}
            w={{ base: "95%", lg: "25%" }}
            // {base:"100%", lg:"50%"}
          >
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={10}
            >
              <Text
                textAlign={"left"}
                fontSize={"29px"}
                fontWeight={"500"}
                p={"20px"}
                pl={"0px"}
              >
                Sign up
              </Text>
              <Stack spacing={4}>
                <FormControl id="email">
                  <Input
                    type="email"
                    borderRadius={"0px"}
                    h={"50px"}
                    placeholder={"Enter email"}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <Input
                    type="password"
                    h={"50px"}
                    placeholder={"Choose password"}
                    borderRadius={"0px"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                {error && (
                  <Box>
                    <Text textAlign={"left"} color={"red"} fontSize={"18px"}>
                      User already exists
                    </Text>
                  </Box>
                )}
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox size={"lg"}>I agree to the Terms of Use</Checkbox>
                  </Stack>
                  <Button
                    bg={"#03a9f4"}
                    borderColor={"#03a9f4"}
                    borderRadius={"0px"}
                    color={"white"}
                    h={"50px"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    fontSize={"20px"}
                    onClick={handleSignup}
                  >
                    CREATE FREE ACCOUNT
                  </Button>
                  <Flex alignItems="center" gap="2">
                    <Divider orientation="horizontal" w={"48%"}></Divider>
                    <Box>
                      <Text fontSize={"20px"}>OR</Text>
                    </Box>
                    <Divider orientation="horizontal" w={"48%"}></Divider>
                  </Flex>

                  <Flex
                    justifyContent={"center"}
                    margin={"auto"}
                    border={"1px solid gray"}
                    h={"50px"}
                  >
                    <Box w={"80px"} h={"50px"}>
                      <Image
                        h={"28px"}
                        m="5px"
                        ml={"10px"}
                        mt={"8px"}
                        src={
                          "https://app.clockify.me/assets/ui-icons/icon-google.svg"
                        }
                      ></Image>
                    </Box>
                    <Spacer />
                    <Text
                      textAlign={"center"}
                      mt={"8px"}
                      w={"400px"}
                      fontSize={"19px"}
                      color={"#666"}
                      onClick={handleGoogleLogin}
                    >
                      Continue with google
                    </Text>
                  </Flex>
                </Stack>
              </Stack>
            </Box>
          </Box>

          <Box>
            <Text
              justifyContent={"center"}
              margin={"auto"}
              h={"50px"}
              mt={"20px"}
              w={"80%"}
              letterSpacing={"-.05rem"}
              color={"#666"}
              fontSize={"22px"}
              fontWeight={"400"}
              lineHeight={"1.5"}
            >
              Your data is safe with us
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
