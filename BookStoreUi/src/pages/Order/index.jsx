import { Box, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Textarea, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { COLOR, URL } from '../../constant'
import OrderViewModel from './OrderViewModel'
import './Order.css'
import Loading from '../../components/Loading'
import { MdPayment } from 'react-icons/md'
import { createPaymentAsync } from '../../api/payment'

const Order = () => {

  const { order, loading, cancelOrder, isCancelLoading, navigateToPaymentPage } = OrderViewModel()

  return (
    <div className="bg">
       { loading !== true ? <Container maxW={"container.md"} pt="20px">
        <Heading color={COLOR} size={"xl"}>Kiểm tra đơn hàng lần cuối</Heading>          
           <Box bg="white" mt="20px">
            { order?.orderDetails ? (order?.orderDetails?.map(detail => {
              return (
                <Box boxShadow={"xl"} padding={["20px", "20px"]}>
                  <Text fontWeight={"medium"} color={COLOR} fontSize="25px">{detail.bookName}</Text>
                  <Text mt="10px">Giá: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(detail.price)}</Text>
                  <Text mt="10px">Số lượng: {detail.quantity}</Text>
                </Box>
              )
            })) : <Text padding={"20px"} fontWeight="light" fontSize={"20px"}>None order to pay</Text>}
          </Box> 
          <Box boxShadow={"xl"} bg="white" mt="20px" padding={["20px", "20px"]}>
            <Text mt="10px">Địa chỉ giao hàng: {order?.address}, quận {order?.district}, thành phố {order?.city}</Text>
            <Text mt="10px">Lời nhắn: {order?.messageOrder}</Text>
            <Text mt="10px">Tổng hóa đơn: <Text fontWeight={"semibold"}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(order?.totalPrice)}</Text></Text>
          </Box>
          <Button 
            bg={COLOR} 
            color={"white"} 
            mt="20px" 
            w={"100%"} 
            leftIcon={<MdPayment />}
            onClick={() => navigateToPaymentPage()}
            >Đặt hàng với VNPay
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
            >Hủy Đơn Hàng
          </Button>
      </Container> : <Loading />}
    </div>
  )
}

export default Order