import React, { useState } from "react";

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
  const [project, setProject] = useState("");

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  console.log(project);
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

            <Box
              onClick={() => setProject("P1")}
              _hover={{ bg: "gray" }}
              vlaue="project1"
              cursor="pointer"
            >
              Project 1
            </Box>
            <Box
              onClick={() => setProject("P2")}
              _hover={{ bg: "gray" }}
              cursor="pointer"
            >
              Project 2
            </Box>
            <Box
              onClick={() => setProject("P3")}
              _hover={{ bg: "gray" }}
              cursor="pointer"
            >
              Project 3
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => addProject(project)}
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
