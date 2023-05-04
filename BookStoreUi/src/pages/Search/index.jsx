import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { COLOR } from '../../constant'
import Card from '../../components/Home/Card'
import SearchViewModel from './SearchViewModel'


const Search = () => {

  const { input, results, keyword } = SearchViewModel()

  return (
    <Box  bg={'gray.100'} minHeight = {"280vh"} pb={"100px"}>
      <Container maxW={"container.xl"}>
        <Box mt="20px">
          <Text color={COLOR} fontWeight={"medium"}>Search result: <Text color={"black"}>{results.length} results</Text></Text>
        </Box>
        {results.length !== 0 ? <Box mb="100px" display={"flex"} flexWrap="wrap" gap={"50px"}>
          {results.map(book => {
            return (
              <Card 
                productId={book.productId}
                productName={book.productName}  
                imageUrl = {book.images[0]?.imageURL} 
                productPrice = {book.productVariants[0]?.productSalePrice} 
                sold = {book.sold}
                quantities = {book.quantity}
                vendorName = {book.vendorName}
                variantQuantities = {book.productVariants?.length}
              />
            )
          })}
        </Box> : <Box display={"flex"} justifyContent={"center"} alignItems={"center"} pt="250px">
          <Text fontWeight={"light"} color={COLOR} fontSize={"45px"}>No result found...</Text>
        </Box> }
      </Container>
    </Box>
  )
}

export default Search