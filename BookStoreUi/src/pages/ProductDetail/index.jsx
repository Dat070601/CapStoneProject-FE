import { Input, Button, Icon, Box, Breadcrumb, BreadcrumbItem, Text, Container, Flex, Image, Divider, HStack, Spinner, VStack, Alert, AlertIcon, AlertTitle, FormHelperText,AlertDescription } from '@chakra-ui/react'
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
    <div className='bg'>
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
                  {book.productName}
                </Text>
              </Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex rounded={"20px"} boxShadow={"xl"} bg="white" mt="20px" padding={"20px"}>
          <Carousel width={"350px"}>
            {book.images?.map(image => {
              return (
                <img src={image.imageURL} />
              )
            })}
          </Carousel>
          <Box ml="20px">
            <Text color={COLOR} fontWeight={"semibold"} fontSize={"25px"}>{book.productName}</Text>
            <Divider mt="10px" width={"500px"}/>
            <Box mt="10px">
              <Text color="gray.600">Sold: {Intl.NumberFormat('de-DE').format(book.sold)} products</Text>
              <HStack mt="10px" gap={"20px"}>
                <Text fontSize={"25px"} color={"tomato"}> {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(productPrice)}</Text>
                <Text decoration={"line-through"} fontSize={"23px"} color={"gray.300"}>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(productDefaultPrice)}</Text>
                <Text color={COLOR}>(You saved: {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(productDefaultPrice - productPrice)})</Text>
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
                  <Text>Quantity: {Intl.NumberFormat('de-DE').format(existQuantity)} products</Text>
                </Box>
              </HStack>
            <Divider mt="10px" width={"500px"}/>
            <HStack mt="10px" gap={"10px"}>
            {book.productVariants?.map(variant => {
              return (
                <Button 
                  color={variant.productVariantName == variantSelected ? "white" : COLOR}
                  bg={variant.productVariantName == variantSelected ? COLOR : ""}
                  variant={"outline"}
                  onClick={() => {
                    handleVariantSelected(variant.productVariantName)
                    handleSelectVariant({
                      salePrice: variant.productSalePrice,
                      defaultPrice: variant.productDefaultPrice,
                      existQuantity: variant.quantity
                    })
                    getVariantId(variant.productVariantId)
                  }}
                >
                  {variant.productVariantName}
                </Button>
              )
            })}
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
      </Container>) : (
        <Loading />
      )}
    </div>
  )
}

export default ProductDetail