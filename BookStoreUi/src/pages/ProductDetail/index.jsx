import { Input, Button, Icon, Box, Breadcrumb, BreadcrumbItem, Text, Container, Flex, Image, Divider, HStack, Spinner, VStack, Alert, AlertIcon, AlertTitle, FormHelperText,AlertDescription, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Tfoot, Td } from '@chakra-ui/react'
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
import Loading from '../../components/Loading'

const ProductDetail = () => {
  const { 
    book,
    productPrice,
    productDefaultPrice,
    quantity,
    loading,
    productVariantId,
    accessTokenSaved,
    variantSelected,
    visible,
    existQuantity,
    isSuccessInCart,
    increase,
    decrease,
    handleSelectVariant,
    addProductToCart,
    getVariantId,
    handleVariantSelected,
    message,
    handleBuyNow,
    loadingBuyProduct
  } = ProductDetailViewModel()

  console.log(variantSelected)

  return (
    <Box bg={'gray.100'} minHeight = {"100%"} pb={"100px"}>
      { visible ? (
        <Alert status={isSuccessInCart == true ? 'success' : 'error'}>
          <AlertIcon />
          <AlertTitle>{isSuccessInCart == true ? "Success!" : "Sorry!"}</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>):<></>}
      {!loading ? (<Container maxW={"container.lg"}>
        <Breadcrumb pt="10px">
          <BreadcrumbItem>
            <Text fontWeight={"semibold"} color={COLOR}>
              <Link to={"/home"}>Home</Link>
            </Text>
          </BreadcrumbItem>
          <BreadcrumbItem>
              <Link to={"/"}>
                <Text fontWeight={"semibold"} color={COLOR}>
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
                isDisabled={accessTokenSaved && variantSelected ? false : true}
                leftIcon={<AiOutlineShoppingCart />}
                onClick={() => {
                  addProductToCart({
                    productVariantId,
                    quantity
                  })
                }}
              >
                Add to cart
              </Button>
              <Button 
                loadingText={"Buy now..."}
                isLoading={loadingBuyProduct}
                isDisabled={accessTokenSaved && variantSelected && quantity > 0 ? false : true}
                color={COLOR} 
                width={"100%"} 
                variant="outline" 
                leftIcon={<MdOutlinePayments />}
                onClick={() => {
                  handleBuyNow({
                    details: [...[], {
                      productVariantId,
                      quantity
                    }]
                  })
                }}
              >
                Buy now
              </Button>
            </VStack>
          </Box>
        </Flex>
        <Box rounded={"20px"} boxShadow={"xl"} bg="white" mt="20px" padding={"20px"}>
          <Text fontSize={'xl'} color={COLOR} as = {'em'}>Thông tin chi tiết sản phẩm: </Text>
          <Box mt={'10px'}> 
            <TableContainer  border={'1px'} borderRadius={'10px'} borderColor={'gray.100'}>
              <Table variant='striped' colorScheme='teal'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Tbody >
                  <Tr>
                    <Td>Tác giả</Td>
                    <Td>{book.author}</Td>
                  </Tr>
                  <Tr>
                    <Td>Nhà xuất bảm</Td>
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
                    <Td>Tóm tắt</Td>
                    <Td><Box maxW={'400px'} h={'fit-content'} overflowWrap={'break-word'} flex flexWrap={'wrapcd BookUi'}>{book.description}</Box></Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>) : (
        <Loading />
      )}
    </Box>
  )
}

export default ProductDetail