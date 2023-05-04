import React from 'react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { COLOR } from '../constant'

const Logo = ({ fontSize }) => {
  return (
    <Text 
        fontSize={fontSize}
        fontWeight={'semibold'}
        color={COLOR}
    >
        <Link to={'/home'}>
            <Text as={"span"} fontWeight={"light"}>Book</Text>
            <Text as={"span"} fontWeight={"bold"}>FAST</Text>
        </Link>
    </Text>
  )
}

export default Logo