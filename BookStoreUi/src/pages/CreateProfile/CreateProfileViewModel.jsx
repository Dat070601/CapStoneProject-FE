import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import useLocalStorage from '../../hooks/useLocalStorage'
import { customerSelector } from '../../stores/reducers/CustomerReducer'
import { createCustomerProfileAsyncThunk } from '../../stores/thunks/CustomerThunk'

const CreateProfileViewModel = () => {

  const [ input, setInput ] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: ""
  })
  const dispatch = useDispatch()
  const { isSuccess, message } = useSelector(customerSelector)
  const { get } = useLocalStorage()
  const accessTokenSaved = get({
    key: "accessToken"
  })
  const navigate = useNavigate()

  const handleInput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const handleCreateProfile = () => {
    dispatch(createCustomerProfileAsyncThunk({
      token: accessTokenSaved,
      fullName: `${input.firstName} ${input.lastName}`,
      phoneNumber: input.phoneNumber
    }))
  } 

  useEffect(() => {
    if (isSuccess == true) {
      setTimeout(() => {
        window.location.href = "/home"
      }, 1000)
    }
  }, [isSuccess])

  return {
    isSuccess,
    message,
    handleCreateProfile,
    handleInput
  }
}

export default CreateProfileViewModel