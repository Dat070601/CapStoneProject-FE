import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Box } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addOrderAsyncThunk } from '../stores/thunks/OrderThunk'

const TypeAddressModal = ({ isOpen, onClose, formik }) => {

    const dispatch = useDispatch()

    
    return (
        <Modal isOpen={isOpen}>
            <ModalOverlay></ModalOverlay>
            <ModalContent>
                <form onSubmit={formik.handleSubmit}>
                    <ModalCloseButton onClick={onClose} />
                    <ModalHeader>Nhập địa chỉ</ModalHeader>
                    <ModalBody>
                        <Input type="text" name="city" placeholder='Thành phố...' onChange={formik.handleChange}></Input>
                        <Input type="text" name="district" placeholder='Quận...' onChange={formik.handleChange}></Input>
                        <Input type="text" name="address" placeholder='Địa chỉ...' onChange={formik.handleChange}></Input>
                        <Input type="text" name="phoneNumber" placeholder='Số điện thoại...' onChange={formik.handleChange}></Input>
                        <Input type="text" name="message" placeholder='Lời nhắn...' onChange={formik.handleChange}></Input>
                    </ModalBody>
                    <ModalFooter>
                        <Box display={"flex"} gap="10px">
                            <Button type="submit" colorScheme='blue'>Mua ngay</Button>
                            <Button colorScheme='red' onClick={onClose}>Đóng</Button>
                        </Box>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default TypeAddressModal