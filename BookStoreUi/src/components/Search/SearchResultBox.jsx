import { Box, Text } from '@chakra-ui/react'
import { COLOR } from '../../constant'
import { useSelector } from 'react-redux'
import { searchSelector } from '../../stores/reducers/SearchReducer'
import React from 'react'
import SearchResultViewModel from './SearchResultViewModel'
import { Link } from 'react-router-dom'

const SearchResultBox = () => {

  const { results, navigate } = SearchResultViewModel()

  return (
    <div>
    <Box 
      position={"absolute"} 
      zIndex={1}
      width="700px"
      minH={"47.4px"}
      bg={"white"}
      mt={"10px"}
      border={'10px'}
      borderColor={"gray"}
    >
      {results.length !== 0 ? results.map(result => {
        return (
          <Box as={"button"} onClick={() => navigate(`/product/${result.id}`)} w="100%" mt="1px" p={["10px", "10px"]}>
            <Text
              textAlign={"left"}          
            ><Link to={`/product/${result.id}`}>{result.title}</Link>
            </Text>
          </Box>
        )     
      }) : <Box mt="1px" border={`1px solid`} p={["10px", "10px"]}>
      <Text          
      >No result...
      </Text>
    </Box>}
    </Box>
    </div>
  )
}

export default SearchResultBox