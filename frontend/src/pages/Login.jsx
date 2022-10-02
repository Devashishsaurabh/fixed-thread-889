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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://clockify-api1.herokuapp.com/login", payload)
      .then((r) => {
        console.log(r.data);
        if (r.data.token) {
          localStorage.setItem("login_token", r.data.token);
          localStorage.setItem("email", r.data.email);

          navigate("/clockify/");
        }
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
  };

  const handleGoogleLogin = async () => {
    await axios
      .get("https://clockify-api.herokuapp.com/auth/google", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-type": "application/x-www-form-urlencoded",
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
    <Flex>
      <Box bg={"#f2f6f8"} h={"auto"} w={"70%"}>
        <Flex
          justifyContent={"center"}
          margin={"auto"}
          pt={"45px"}
          h={"140px"}
          w={"90%"}
        >
          <Box mt={"-30px"} ml={"-20px"} h={"100%"} w={"185px"}>
            <Image src="https://app.clockify.me/assets/logo.svg" h={"100%"} />
          </Box>
          <Spacer />
          <Flex h={"100%"} w={"277px"}>
            <Text fontSize={"20px"}>Don't have an account? </Text>
            <Spacer />
            <Link to="/signup">
              <Text fontSize={"20px"} color={"#03a9f4"}>
                Sign Up
              </Text>
            </Link>
          </Flex>
        </Flex>

        <Box
          justifyContent={"center"}
          margin={"auto"}
          h={"auto"}
          // w={"55%"}
          w={{ base: "100%", lg: "100%" }}
        >
          <Box>
            <Box
              justifyContent={"center"}
              margin={"auto"}
              w={{ base: "95%", lg: "46%" }}
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
                  Log in
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
                      placeholder={"Enter password"}
                      borderRadius={"0px"}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  {error && (
                    <Box>
                      <Text textAlign={"left"} color={"red"} fontSize={"18px"}>
                        Invalid Credentials
                      </Text>
                    </Box>
                  )}
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox size={"lg"}>Stay logged in</Checkbox>
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
                      onClick={handleLogin}
                    >
                      LOG IN
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
                      cursor="pointer"
                      onClick={handleGoogleLogin}
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
                mt={"50px"}
                w={"80%"}
                letterSpacing={"-.05rem"}
                color={"#7678796"}
                fontSize={"18px"}
                fontWeight={"400"}
                lineHeight={"1.5"}
              >
                {/* Your data is safe with us : */}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box h={"100vh"} w={"34%"}>
        <Image
          src="https://i.ibb.co/c1HNvyq/Login-Page-Img.png"
          h={"100%"}
          // onClick={""} // TODO: goto features page
        ></Image>
      </Box>
    </Flex>
  );
};

export default Login;
