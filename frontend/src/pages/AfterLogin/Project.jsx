import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import ProjectModal from "../../Components/Projects/ProjectModal";
import axios from "axios";
import { BsTags } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { async } from "q";
const Project = () => {
  let [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  console.log(data);

  let token = localStorage.getItem("login_token");
  let getData = async () => {
    await axios
      .get("https://clockify-api1.herokuapp.com/project", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setData(res.data));
  };

  const handledelete = async (id) => {
    console.log(id);
    await axios
      .delete(`https://clockify-api1.herokuapp.com/project/delete/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res))
      .then(() => getData());
  };

  useEffect(() => {
    getData();
  }, [status]);
  return (
    <Box w="80vw" bg="#f2f6f8" overflow={"none"}>
      <Flex
        w="90%"
        m="auto"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Text as="b" fontSize={"2rem"} p="1rem" color="#979b9a">
          Projects
        </Text>
        {/* <Button p="1rem" bg="#03a9f4">Create new Project</Button> */}
        <ProjectModal setStatus={setStatus} status={status} />
      </Flex>

      <Flex
        border={"1px solid #c6d2d9"}
        w="80%"
        m="auto"
        p="1rem"
        gap="1rem"
        justifyContent={"space-between"}
      >
        <Box p=".5rem" display="flex">
          <Text as="b" color="#979b9a">
            FILTER
          </Text>
          <MdOutlineArrowDropDown />
        </Box>

        <Box p=".5rem" display={"flex"}>
          <Text as="b" color="#979b9a">
            ACTIVE
          </Text>
          <MdOutlineArrowDropDown />
        </Box>

        <Box p=".5rem" display={"flex"}>
          <Text as="b" color="#979b9a">
            CLIENT
          </Text>
          <MdOutlineArrowDropDown />
        </Box>

        <Box p=".5rem" display={"flex"}>
          <Text as="b" color="#979b9a">
            ACCESS
          </Text>
          <MdOutlineArrowDropDown />
        </Box>

        <Box p=".5rem" display={"flex"}>
          <Text as="b" color="#979b9a">
            BILLING
          </Text>
          <MdOutlineArrowDropDown />
        </Box>

        <Flex p=".5rem" gap="1rem" alignItems={"center"}>
          <BsSearch fontSize={"1.5rem"} />
          <Input placeholder="Project name" />
        </Flex>

        <Button bg="white" border="1px solid #03a9f4">
          Apply Filter
        </Button>
      </Flex>

      <Box w="80%" m="auto">
        {data?.map((el) => (
          <Flex
            w="60vw"
            h="5rem"
            bg={"white"}
            gap="1rem"
            m={"1rem"}
            justify="space-evenly"
            alignItems={"center"}
            key={"el._id"}
          >
            <Box border="1px solid black" padding={"0 1rem 0 1rem"}>
              <Text as="b">{el.tag}</Text>
            </Box>
            <Box>
              <Text
                as="b"
                color={"black"}
                bg="#e1f5fe"
                padding={"0.5rem 1rem 0.5rem 1rem"}
              >{`Project: ${el.name}`}</Text>
            </Box>
            <Box>
              <BsTags fontSize={"30px"} />
            </Box>
            <BsThreeDotsVertical
              cursor={"pointer"}
              onClick={() => handledelete(el._id)}
            />
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Project;
