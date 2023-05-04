import { Button, Checkbox, HStack, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'

const CommitToCreatePaymentBox = ({ checkedChange, redirectToPaypal }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Accept payment policies</ModalHeader>
        <ModalBody>
          <HStack gap="10px">
            <Checkbox onChange={checkedChange}/>
            <Text>
            By click to checkbox might make you accept 3rd party policies 
            </Text>
          </HStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={redirectToPaypal}>Redirect to payment page</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CommitToCreatePaymentBox