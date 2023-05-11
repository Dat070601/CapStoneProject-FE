import React from 'react'
import CateogryViewModel from './CateogryViewModel'
import { Container, Box} from '@chakra-ui/react'
import Card from '../../components/Home/Card'
import HomeViewModel from '../Home/HomeViewModel'
import ListCategory from '../../components/ListCategory/ListCategory'

const Category = () => {
  const { cate, loading} = CateogryViewModel()
  const { cates } = HomeViewModel()
  return (
    <Box bg={'gray.200'} minHeight = {"280vh"} pb={"100px"}>
      <Box display={'flex'}>
        <Box ml={"10px"}>
          <ListCategory mainCategories={cates}/>
        </Box>
        <Container mt={"50px"} maxW={"container.xl"}>
              <Box display={"flex"} flexWrap={"wrap"} gap={'20px'}>
                {cate.books?.map(book => {
                    return(
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
        </Container>
      </Box>
    </Box>
  )
}

export default Category