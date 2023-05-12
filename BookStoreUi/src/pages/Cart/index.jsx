import { Icon, Container, Text, Heading, HStack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Input, Checkbox, Flex, Box, Textarea, Spacer, InputGroup, Select } from '@chakra-ui/react';
import React from 'react';
import { COLOR } from '../../constant';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import CartViewModel from './CartViewModel';
import { BsPaypal } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { fetchGetProvince } from '../../api/address';
import { useFormik } from 'formik';

const Cart = () => {
	const { 
		carts, 
		increase, 
		decrease, 
		selectProductAddToOrder,
		getTotalInCart,
		prepareOrderProduct,
		createOrderAsync,
		prepareToAddOrderProducts,
		inputHandle,
		quantity,
		setQuantity,
		cartQuantity,
		quantityOfProducts,
		deleteProductInCart,
		isDeleteProductLoading,
		toggleDeleteButton,
		handleToggleDeleteButton,
		selectProductToDelete,
		prepareToDeleteProducts,
		isLoadingDelete
	} = CartViewModel();

	const total = getTotalInCart(prepareOrderProduct)
	const cartForm = useFormik(
		{
			initialValues: {
		city: '',
		district: '',
		address: '',
		phoneNumber: '',
		message: ''
	},

	onSubmit:  (values) => {		
			createOrderAsync({values,
				orderDetails: prepareToAddOrderProducts
			})
	}})
	return (
		<Box margin="20px 0px 0px 0px" position={"relative"} height="87vh" bg={"gray.200"}>
			<form onSubmit={cartForm.handleSubmit}>
			<Flex justifyContent={"center"} gap={"100px"} flexWrap={"wrap"}>
				<Box>
					<Box rounded={"20px"} boxShadow={"xl"} bg="white" padding={"20px"} mt={"20px"}>
						<Box textAlign={"center"}>
							<Text fontSize={'xl'} fontWeight={"bold"}>Nhập thông tin giao hàng</Text>
						</Box>	

						<Box display={'flex'} gap={'25px'} justifyContent={"center"} rounded={'20px'} mt={"20px"}>
							<Box maxW={"200px"}>
								<Text fontSize={'xl'} color={COLOR} as = {'em'}>Thành phố/Tỉnh:</Text>
								<Input id="city"
                                            name="city"
                                            value={cartForm.values.city}
                                            onChange={cartForm.handleChange} placeholder='Nhập thành phố' border={"1px"} required/>
							</Box>
							<Box maxW={"200px"}>
								<Text fontSize={'xl'} color={COLOR} as = {'em'}>Quận/Huyện:</Text>
								<Input id="district"
                                            name="district"
                                            value={cartForm.values.district}
                                            onChange={cartForm.handleChange} placeholder='Nhập quận' border={"1px"} required/>
							</Box>
							<Box maxW={"200px"}>
								<Text fontSize={'xl'} color={COLOR} as = {'em'}>Địa chỉ: </Text>
								<Input id="address"
                                            name="address"
                                            value={cartForm.values.address}
                                            onChange={cartForm.handleChange} placeholder='Nhập địa chỉ' border={"1px"} required/>
							</Box>
							<Box maxW={"200px"}>
								<Text fontSize={'xl'} color={COLOR} as = {'em'}>Số điện thoại:</Text>
								<Input id="phoneNumber"
                                            name="phoneNumber"
                                            value={cartForm.values.phoneNumber}
                                            onChange={cartForm.handleChange} placeholder='Nhập số diện thoại' border={"1px"} required/>
							</Box>
						</Box>			
					</Box>
					<TableContainer mt="20px" >
						<Table variant={'simple'} rounded={"20px"} boxShadow={"xl"} bg="white" padding={"20px"}>
							<Thead>
								<Tr>
									<Th>
										<Button 
											color={"white"} 
											onClick={handleToggleDeleteButton}
											bg={COLOR}>Chỉnh sửa
										</Button>
									</Th>
									<Th>Tên sản phẩm</Th>
									<Th>Số lượng</Th>
									<Th>Giá Tiền</Th>
								</Tr>
							</Thead>
							<Tbody>
								{carts.map(cart => {
									return (
										<Tr>
											<Td>
												<Checkbox
													onChange={(event) => !toggleDeleteButton ? selectProductAddToOrder({
														id: cart.bookId,
														title: cart.bookName,
														quantity: cart.quantity,
														total: cart.price,
													}, event) : selectProductToDelete({
														bookId: cart.bookId
													}, event)}
												></Checkbox>
											</Td>
											<Td>
												<HStack>
													<Text color={COLOR} fontWeight={'medium'}>{cart.bookName}</Text>
												</HStack>
											</Td>
											<Td>
												<HStack>
													<Button 
														size={'sm'}
														onClick={() => setQuantity(cartQuantity - 1)}
													>
														<Icon as={AiOutlineMinus}/>
													</Button>
													<Input 
														value={cart.quantity}
														// defaultValue={cart.quantity}
														type={'number'} 
														width={'25%'} 
													/>
													<Button 
														size={'sm'}
														onClick={() => increase(cart.quantity)}
													>
														<Icon as={AiOutlinePlus}/>
													</Button>
												</HStack>
											</Td>
											<Td>{cart.price} đ</Td>
										</Tr>
									);
								})}
							</Tbody>
						</Table>
					</TableContainer>
				</Box>
				<Box padding={"20px"} bg={'hwb(180 82% 0%)'} w="400px" mt="20px" position={"relative"}>
					<Text fontSize={"20px"} color={COLOR} fontWeight={"semibold"}>Chuẩn bị đơn hàng</Text>
					{prepareOrderProduct.map(product => {
						return (
							<Box mt="5px" padding={"20px"} border={"white 1px solid"}>
								<Text fontWeight={"medium"} color={COLOR}>{product.title}</Text>
								<Text fontWeight={"light"} color={COLOR}>{product.variant}</Text>
								<Text fontWeight={"light"} color={COLOR}>Số lượng: {product.quantity}</Text>
								<Text mt="10px" fontWeight={"medium"}>{product.total} đ</Text>
							</Box>
						)
					})}
					<Text color={COLOR} fontWeight={"bold"} mt="10px">Tổng tiền: {total} đ</Text>
					<Box mt="10px">
						<Textarea id="message" name="message" value={cartForm.values.message} onChange={cartForm.handleChange} placeholder='message...' bg={"white"}/>
					</Box>
					<Button 
					type='submit'
						mt="10px"
						bg={COLOR} 
						color="white" 
						mb="10px"
						width={"100%"}
						// onClick={}
						>Tạo đơn hàng</Button>
						<Text color={COLOR} >
							<Link to="/order">Xem đơn hàng</Link>
						</Text>
				</Box>
			</Flex>
			</form>

			{ toggleDeleteButton ? <Box bg={"hwb(180 76% 0%)"} padding={"30px 30px 10px 30px"} minW="300px" w="100%" display={"flex"} justifyContent={"space-evenly"} position="absolute" bottom={"0px"}>
				<Box mt="10px">
					<Text fontWeight="medium">Select product to delete</Text>
				</Box>
				<Spacer />
				<Box mb="10px">
					<Button isLoading={isLoadingDelete} loadingText="Delete..." colorScheme={"red"} onClick={() => {
						deleteProductInCart({
							data: prepareToDeleteProducts
						})
					}}>Delete</Button>
				</Box>
			</Box> : <></> }

		</Box>
	);
};

export default Cart;