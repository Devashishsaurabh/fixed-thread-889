import React, { useState } from "react";
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
} from "@chakra-ui/react";

function ProjectModal({ setStatus, status }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  let token = localStorage.getItem("login_token");

  let getData = async () => {
    await axios
      .get("https://clockify-api1.herokuapp.com/project", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setStatus(!status));
  };

  let postdata = async () => {
    let newProject = {
      name,
      tag,
      billable: false,
    };

    await axios
      .post("https://clockify-api1.herokuapp.com/project/create", newProject, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res.data.newProject))
      .then(() => getData());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postdata();
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} bg="#03a9f4" color="white">
        CREATE NEW PROJECT
      </Button>
      {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Project name</FormLabel>
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter project name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Tag name</FormLabel>
              <Input
                onChange={(e) => setTag(e.target.value)}
                placeholder="Enter tag name"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ProjectModal;
