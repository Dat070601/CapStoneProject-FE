import { Box, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Textarea, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { COLOR } from '../../constant'
import OrderViewModel from './OrderViewModel'
import './Order.css'
import Loading from '../../components/Loading'
import { BsPaypal } from 'react-icons/bs'

const Order = () => {

  const { order, loading, navigateToPaymentPage, cancelOrder, isCancelLoading } = OrderViewModel()

  return (
    <div className="bg">
       { loading !== true ? <Container maxW={"container.md"} pt="20px">
        <Heading color={COLOR} size={"xl"}>Order</Heading>          
           <Box bg="white" mt="20px">
            { order?.orderDetails ? (order?.orderDetails?.map(detail => {
              return (
                <Box boxShadow={"xl"} padding={["20px", "20px"]}>
                  <Text color={"gray.200"}>id: {detail.productVariantId}</Text>
                  <Text fontWeight={"medium"} color={COLOR} fontSize="25px">{detail.productName}</Text>
                  <Text mt="10px">Price: {detail.price}</Text>
                  <Text mt="10px">Quantity: {detail.quantity}</Text>
                </Box>
              )
            })) : <Text padding={"20px"} fontWeight="light" fontSize={"20px"}>None order to pay</Text>}
          </Box> 
          <Box boxShadow={"xl"} bg="white" mt="20px" padding={["20px", "20px"]}>
            <Text>Total price: <Text fontWeight={"semibold"}>{order?.totalPrice}</Text></Text>
          </Box>
          <Button 
            bg={COLOR} 
            color={"white"} 
            mt="20px" 
            w={"100%"} 
            leftIcon={<BsPaypal />}
            onClick={navigateToPaymentPage}
            >Create payment with Paypal
          </Button>
          <Button 
            bg={"red"} 
            isLoading={isCancelLoading}
            loadingText="Canceling..."
            color={"white"} 
            mt="20px" 
            w={"100%"} 
            onClick={() => {
              cancelOrder({
                orderId: order.orderId,
                statusOrder: "Cancel"
              })
            }}
            >Cancel order
          </Button>
      </Container> : <Loading />}
    </div>
  )
}

export default Order