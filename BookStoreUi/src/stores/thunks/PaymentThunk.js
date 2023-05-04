import { createAsyncThunk } from "@reduxjs/toolkit";
import { createPaymentAsync } from "../../api/payment";
import { URL } from "../../constant";

const createPaymentAsyncThunk = createAsyncThunk("payment/create", async (payload) => {
  try {
    const response = await createPaymentAsync(URL, {
      orderId: payload.orderId
    })
    return response
  } catch (error) {
    console.log(error)
  }
})

export { createPaymentAsyncThunk }