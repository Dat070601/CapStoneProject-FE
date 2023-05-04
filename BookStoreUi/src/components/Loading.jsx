import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Flex h={"700px"} color={"blue.400"} justifyContent={"center"} alignItems={"center"}>
      <Spinner speed='0.5s' size={"xl"} />
    </Flex>
  )
}

export default Loading