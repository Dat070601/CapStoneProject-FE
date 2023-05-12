import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addOrderAsyncThunk } from '../stores/thunks/OrderThunk'
import { COLOR } from '../constant'

const TypeAddressModal = ({ isOpen, onClose, formik }) => {

    const dispatch = useDispatch()    
    return (
        <Modal isOpen={isOpen}>
            <ModalOverlay></ModalOverlay>
            <ModalContent>
                <form onSubmit={formik.handleSubmit}>
                    <ModalCloseButton onClick={onClose} />
                    <ModalHeader>
                        <Box textAlign={"center"}>
							<Text fontSize={'xl'} fontWeight={"bold"}>Nhập thông tin giao hàng</Text>
						</Box>	
                    </ModalHeader>
                    <ModalBody>
                        <Text fontSize={'xl'} color={COLOR} as = {'em'}>Thành phố/Tỉnh:</Text>
                        <Input type="text" name="city" placeholder='Thành phố...' onChange={formik.handleChange} required></Input>
                        <Text fontSize={'xl'} color={COLOR} as = {'em'}>Quận/Huyện:</Text>
                        <Input type="text" name="district" placeholder='Quận...' onChange={formik.handleChange} required></Input>
                        <Text fontSize={'xl'} color={COLOR} as = {'em'}>Địa chỉ cụ thể</Text>
                        <Input type="text" name="address" placeholder='Địa chỉ...' onChange={formik.handleChange} required></Input>
                        <Text fontSize={'xl'} color={COLOR} as = {'em'}>Số điện thoại</Text>
                        <Input type="text" name="phoneNumber" placeholder='Số điện thoại...' onChange={formik.handleChange} required></Input>
                        <Text fontSize={'xl'} color={COLOR} as = {'em'}>Lời nhắn:</Text>
                        <Input type="text" name="message" placeholder='Lời nhắn...' onChange={formik.handleChange}></Input>
                    </ModalBody>
                    <ModalFooter>
                        <Box display={"flex"} gap="10px" maxW={"200px"}>
                            <Button type="submit" colorScheme='blue' maxW={"200px"}>Mua ngay</Button>
                            <Button colorScheme='red' onClick={onClose} w={"200px"}>Đóng</Button>
                        </Box>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default TypeAddressModal