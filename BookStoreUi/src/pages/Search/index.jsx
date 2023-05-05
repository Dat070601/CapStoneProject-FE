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
        <Box mt="20px" display={'flex'} gap={'10px'}>
          <Text color={COLOR} fontWeight={"medium"}>Đã tìm được </Text>
          <Text color={"black"}>{results.length} Kết quả</Text>
        </Box>
        {results.length !== 0 ? <Box mb="100px" display={"flex"} flexWrap="wrap" gap={"50px"}>
          {results.map(book => {
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
        </Box> : 
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} pt="250px" gap={'10px'}>
          <Text fontWeight={"light"} color={COLOR} fontSize={"45px"}>Xin lỗi, chúng tôi không tìm thấy kết quả cho</Text>
          <Text fontSize={"45px"} color={'tomato'} fontWeight={"semibold"}>{keyword}</Text>
        </Box> }
      </Container>
    </Box>
  )
}

export default Search