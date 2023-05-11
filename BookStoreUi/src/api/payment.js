import axios from 'axios'

const createPaymentAsync = async (url, { orderId }) => {
  const response = await axios.post(`${url}/api/payment/create-payment`,{
    orderId,
    orderType : "string"
  })
  console.log(response);
  return response.data
  // try {
  // } catch (error) {
  //   console.log(error)
  // }
}

export { createPaymentAsync }