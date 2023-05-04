import axios from 'axios'

const createPaymentAsync = async (url, { orderId }) => {
  try {
    const response = await axios.get(`${url}/payment?orderId=${orderId}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export { createPaymentAsync }