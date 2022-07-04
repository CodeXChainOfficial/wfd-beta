/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FunctionComponent, useEffect, useState } from "react";
import { useStore } from "../../contexts/store";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";

import { GetOneProject, ShortenAddress } from "../../utils/Util";

interface Props {
  projectId: number;
  isOpen: boolean;
  closeWhitelist: (projectId: number) => void;
  onClose: () => void;
}

const Whitelist: FunctionComponent<Props> = ({
  projectId,
  isOpen,
  closeWhitelist,
  onClose,
}) => {
  const [data, setData] = useState<any>(null);
  const { state, dispatch } = useStore();

  useEffect(() => {
    const getData = async () => {
      const projectData = state.projectData;
      const data = GetOneProject(projectData, projectId);
      setData(data);
    };
    getData();
  }, [projectId]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registered Members</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={"10px"}>
              {data?.whitelist?.map((item: any, index: number) => (
                <Flex key={index} justify={"space-between"} w={"80%"}>
                  <Text>{ShortenAddress(item.wallet)}</Text>
                  <Text>{item.card_type}</Text>
                </Flex>
              ))}
            </VStack>
            <Text mt={"30px"}>Are you going to close the Whitelist?</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => closeWhitelist(projectId)}
            >
              Yes
            </Button>
            <Button variant="ghost" onClick={onClose}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Whitelist;
