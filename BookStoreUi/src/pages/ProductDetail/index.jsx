import { Input, Button, Icon, Box, Breadcrumb, BreadcrumbItem, Text, Container, Flex, Image, Divider, HStack, Spinner, VStack, Alert, AlertIcon, AlertTitle, FormHelperText,AlertDescription, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Tfoot, Td, Textarea, InputGroup, IconButton, useDisclosure } from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import { COLOR } from '../../constant'
import ProductDetailViewModel from './ProductDetailViewModel'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './ProductDetail.css'
import { MdOutlinePayments } from 'react-icons/md'
import {RxPaperPlane} from 'react-icons/rx'
import Loading from '../../components/Loading'
import Card from '../../components/Home/Card'
import TypeAddressModal from '../../components/TypeAddressModal'
import { useFormik } from 'formik'
import { getProductByIdAsyncThunk } from '../../stores/thunks/ProductThunk'

const ProductDetail = () => {
  const { 
    formik,
    book,
    quantity,
    loading,
    visible,
    isSuccessInCart,
    increase,
    accessTokenSaved,
    decrease,
    addProductToCart,
    message,
    createReviewAsync,
    loadingBuyProduct,
    books,
    dispatch
  } = ProductDetailViewModel()

  const { onOpen, isOpen, onClose } = useDisclosure()

  const reviewForm = useFormik({
    initialValues: {
      reviewText: ''
    },
    
    onSubmit: (values, { resetForm }) => {
      createReviewAsync({values})
      dispatch(getProductByIdAsyncThunk({
        id: book.id
      }))
      resetForm()
    }
  })

  return (
    <Box bg={'gray.100'} minHeight = {"100%"} pb={"100px"}>
      { visible ? (
        <Alert status={isSuccessInCart == true ? 'success' : 'error'} position={'absolute'} w={"400px"} ml={"5px"}>
          <AlertIcon />
          <AlertTitle>{isSuccessInCart == true ? "Success!" : "Sorry!"}</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>):<></>}
      {!loading ? (<Container maxW={"container.lg"}>
        <Breadcrumb pt="10px">
          <BreadcrumbItem>
            <Text fontWeight={"semibold"}>
              <Link to={"/home"}>Home</Link>
            </Text>
          </BreadcrumbItem>
          <BreadcrumbItem>
              <Link to={"/"}>
                <Text fontWeight={"semibold"}>
                  {book.title}
                </Text>
              </Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex rounded={"20px"} boxShadow={"xl"} bg="white" mt="20px" padding={"20px"}>
          <Carousel width={"350px"}>
            {book.images?.map(image => {
              return (
                <img src={image.imageUrl} />
              )
            })}
          </Carousel>
          <Box ml="20px">
            <Text color={COLOR} fontWeight={"semibold"} fontSize={"25px"}>{book.title}</Text>
            <Divider mt="10px" width={"500px"}/>
            <Box mt="10px">
              <Text color="gray.600">Đã bán: {Intl.NumberFormat('de-DE').format(book.sold)} sản phẩm </Text>
              <HStack mt="10px" gap={"20px"}>
                <Text fontSize={"25px"} color={"tomato"}> {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(book.salePrice)}</Text>
                <Text decoration={"line-through"} fontSize={"23px"} color={"gray.300"}>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(book.defaultPrice)}</Text>
                <Text color={COLOR}>(Bạn đã tiết kiệm: {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(book.defaultPrice - book.salePrice)})</Text>
              </HStack>
            </Box>
            <Divider mt="10px" width={"500px"}/>
              <HStack mt="10px">
                <Button 
                  size={'sm'}
                  onClick={decrease}
                >
                  <Icon as={AiOutlineMinus}/>
                </Button>
                <Input 
                  type={'number'} 
                  width={'14%'} 
                  value={quantity}
                />
                <Button 
                  size={'sm'}
                  onClick={increase}
                >
                  <Icon as={AiOutlinePlus}/>
                </Button>
                <Box>
                  <Text>Số lượng còn lại: {Intl.NumberFormat('de-DE').format(book.quantity)} sản phẩm</Text>
                </Box>
              </HStack>
            <Divider mt="10px" width={"500px"}/>
            <VStack mt="30px" gap="10px">
            <Button 
                bg={COLOR} 
                color="white" 
                width={"100%"} 
                isDisabled={accessTokenSaved ? false : true}
                leftIcon={<AiOutlineShoppingCart />}
                onClick={() => {
                  addProductToCart({
                    bookId : book.id,
                    quantity
                  })
                }}
              >
                Thêm vào giỏ hàng
              </Button>
              <Button 
                loadingText={"Buy now..."}
                isLoading={loadingBuyProduct}
                isDisabled={accessTokenSaved && quantity > 0 ? false : true}
                color={COLOR} 
                width={"100%"} 
                variant="outline" 
                leftIcon={<MdOutlinePayments />}
                onClick={() => {
                  onOpen()
                }}
              >
                Mua Ngay
              </Button>
            </VStack>
          </Box>
        </Flex>
        <Box rounded={"20px"} boxShadow={"xl"} bg="white" mt="20px" padding={"20px"}>
          <Text fontSize={'xl'} color={COLOR} as = {'em'}>Thông tin chi tiết sản phẩm: </Text>
          <Box mt={'10px'}> 
            <TableContainer  border={'1px'} borderRadius={'10px'} borderColor={'gray.100'}>
              <Table variant='striped' colorScheme='teal'>
                <Tbody>
                  <Tr>
                    <Td>Tác giả</Td>
                    <Td>{book.author}</Td>
                  </Tr>
                  <Tr>
                    <Td>Nhà xuất bản</Td>
                    <Td>{book.publisher}</Td>
                  </Tr>
                  <Tr>
                    <Td>Thể loại</Td>
                    <Td>{book.categoryName}</Td>
                  </Tr>
                  <Tr>
                    <Td>Số trang</Td>
                    <Td>{book.numPage}</Td>
                  </Tr>
                  <Tr>
                    <Td>Tóm tắt ngắn</Td>
                    <Td whiteSpace={"pre-wrap"}>{book.description}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box rounded={"20px"} boxShadow={"xl"} bg="blackAlpha.100" mt="20px" padding={"20px"}>
          <Text fontSize={'xl'} as = {'em'}>Các sản phẩm cùng thể loại:</Text>
          <Box display={'flex'} gap={'25px'} justifyContent={'center'} mt={'5px'}>
            {books?.map(book => {
              return (
                <Card 
                productId={book.id}
                productName={book.title}  
                imageUrl = {book.imageUrl} 
                productPrice = {book.price} 
                sold = {book.sold}
                quantities = {book.quantity}
                />
              ) 
            })}
          </Box>
        </Box>
        <Box rounded={"20px"} boxShadow={"xl"} bg="white" mt="20px" padding={"20px"} >
          {/* Thêm thời gian cmt */}
          <Text fontSize={'xl'} color={COLOR} as = {'em'}>Bình luận:</Text>
          <Box mt={'10px'} mb={'10px'}>
            <form onSubmit = {reviewForm.handleSubmit}>
            <HStack>
              <Input id="reviewText" name="reviewText" value={reviewForm.values.reviewText} onChange={reviewForm.handleChange} type='input' placeholder='Viết bình luận...'/>
              <Box w={"100px"}>
                <IconButton type='submit' aria-label='post-coment' background={COLOR} icon={<RxPaperPlane color={'White'}/>} isDisabled={accessTokenSaved ? false : true}/>
              </Box>
            </HStack>
            </form>
          </Box>
          {book.reviews?.map( review => {
            return (
              <Box mt={'10px'} rounded={"10px"} boxShadow={'xl'} padding={'10px'} bg={'gray.200'}>
                <Box display={'flex'} gap={'10px'}>
                  <Text fontWeight={'bold'} textColor={COLOR}>{review.name}</Text> 
                </Box>
                <Box mt={'5px'} ml={'20px'}>
                  <Text>{review.reviewText}</Text>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Container>) : (
        <Loading />
      )}
      <TypeAddressModal 
        formik={formik}
        isOpen={isOpen} 
        onClose={onClose} 
        
      />
    </Box>
  )
}

export default ProductDetail