import React from 'react'
import { 
  Flex,
  Button,
  Text,  
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

//import { useStore } from '../../store'

export default function VoteModal({data,WefundApprove,onNext,MilestoneVote}:{data:any,WefundApprove:any,onNext:any,MilestoneVote:any}) 
{
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Vote for Each Milestone of the Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text textAlign={'left'}>
            Project Project Milestone Description <br/>
            Aliquip mollit sunt qui irure. Irure ullamco Lorem
            excepteur dolor qui ea ad quis. Enim fugiat cillum enim
            ad occaecat sint qui elit labore mollit sunt laborum
            fugiat consequat. Voluptate labore sunt duis eu
            deserunt. Occaecat do ut ut labore cillum enim dolore ad
            enim enim id. Aliquip do veniam ad excepteur ad cillum
            qui deserunt nostrud sunt aliqua duis sunt occaecat.
            Laborum incididunt commodo ullamco proident quis.
          </Text>
        </ModalBody>
        <ModalFooter>
            <Button colorScheme='grey' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' mr={3}
              onClick={()=>{
                onClose(); MilestoneVote(data.project_id, true);}}
            >
              Vote Yes
            </Button>
            <Button colorScheme='red' mr={3}
              onClick={()=>{
                onClose(); MilestoneVote(data.project_id, false);}}
            >
              Vote No
            </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
};
