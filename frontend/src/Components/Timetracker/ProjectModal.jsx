import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function InitialFocus({ addProject }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [project, setProject] = useState({});

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [data, setData] = useState([]);
  // console.log(project);

  let token = localStorage.getItem("login_token");
  let getData = async () => {
    await axios
      .get("https://clockify-api1.herokuapp.com/project", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Flex onClick={onOpen} gap="0.5rem" color="#2ab6f6" cursor="pointer">
        <Text>Project</Text> <AiOutlinePlusCircle fontSize={"30px"} />
      </Flex>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Enter new project name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            {data?.map((el) => (
              <Box
                key={el._id}
                onClick={() => setProject({ name: el.name, tag: el.tag })}
                _hover={{ bg: "gray" }}
                vlaue="project1"
                cursor="pointer"
              >
                {el.name}
              </Box>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => (addProject(project), onClose())}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default InitialFocus;
