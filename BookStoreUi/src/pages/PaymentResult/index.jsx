import { Box, Text, Icon, VStack, Spinner, Fade } from '@chakra-ui/react'
import { BsCheckCircle } from 'react-icons/bs'
import { COLOR } from '../../constant'
import React from 'react'
import { Link } from 'react-router-dom'
import PaymentResultViewModel from './PaymentResultViewModel'
import Loading from '../../components/Loading'

const PaymentResult = () => {

  const { loading } = PaymentResultViewModel()

  return (
    <>
    {!loading ? <Fade in={!loading}><VStack mt="100px">
      <Icon as={BsCheckCircle} width="300px" height={"50px"} color={COLOR} />
      <Text fontSize={"40px"} fontWeight={"light"} color="gray.700">Payment Successfully</Text>
      <Text>Thank you for shopping with us</Text>
      <Box>
        <Link to="/home" style={{ color: COLOR }}>Continue to buy</Link>
      </Box>
    </VStack></Fade>: <Loading />}
    </>
  )
}

export default PaymentResult