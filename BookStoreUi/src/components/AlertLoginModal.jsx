import React from 'react'
import { ModalCloseButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import { COLOR } from '../constant'
const AlertLoginModal = ({ title, body, close, reLogin, isOpen, onClose, children }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton onClick={close}/>
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>{body}</ModalBody>
          <ModalFooter>
            <Button 
              background={COLOR} 
              color={"white"} 
              onClick={reLogin}
            >Re-login</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {children}
    </div>
  )
}

export default AlertLoginModal