import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import { productSelector } from '../../stores/reducers/ProductReducer'
import { addProductToCartAsyncThunk } from '../../stores/thunks/CartThunk'
import { getProductByIdAsyncThunk } from '../../stores/thunks/ProductThunk'
import { useToast } from '@chakra-ui/react'
import { cartSelector } from '../../stores/reducers/CartReducer'
import { addOrderAsyncThunk } from '../../stores/thunks/OrderThunk'
import { updateCartAmmount } from '../../stores/reducers/CartReducer'
import { fetchBookSameCateAsyncThunk } from '../../stores/thunks/ProductThunk' 
import { useFormik } from 'formik'
import { addReviewAsyncThunk } from '../../stores/thunks/ReviewThunk'

const ProductDetailViewModel = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const params = useParams()
  const toast = useToast()
  const { get } = useLocalStorage()

  const { book } = useSelector(productSelector)
  const { isSuccessInCart, carts, message } = useSelector(cartSelector) 
  const { books} = useSelector(productSelector)
  const [ quantity, setQuantity ] = useState(1)
  const [ loading, setLoading ] = useState(true)
  const [ loadingBuyProduct, setLoadingBuyProduct ] = useState(false)
  const [ visible, setVisible ] = useState(false)
  const accessTokenSaved = get({
    key: "accessToken"
  })
  const formik = useFormik({
    initialValues: {
      city: '',
      district: '',
      address: '',
      phoneNumber: '',
      message: ''
    },
    onSubmit: (value) => {
      dispatch(addOrderAsyncThunk({
        token: accessTokenSaved,
        data: {...value, paymentId: "9b9dad96-726f-4195-aacb-d952f61fca31", orderDetails: [...[], {
          bookId : book.id,
          quantity
        }]}
      }))
      navigation("/order")
    }
  })

  const createReviewAsync = ({
		values,
	}) => {
		dispatch(addReviewAsyncThunk({
			token: accessTokenSaved,
			data: {
        bookId: book.id,
        reviewText: values.reviewText
			}
		}))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [loading])

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProductByIdAsyncThunk({
        id: params.id
      }))
      setLoading(false)
    }, 1000)

    return () => {
      setLoading(true)
    }
  }, [dispatch, params.id])

  useEffect(() => {
    dispatch(fetchBookSameCateAsyncThunk({
      bookId: params.id
    }))
  },[dispatch, params.id])
  
  const increase = () => {
    setQuantity(prev => prev + 1)
  }

  const decrease = () => {
    setQuantity(prev => prev - 1)
  }

  useEffect(() => {
    if (quantity < 1)
    {
      setQuantity(0)
    }
  }, [quantity])

  const addProductToCart = ({ bookId, quantity }) => {
    dispatch(addProductToCartAsyncThunk({
      token: accessTokenSaved,
      bookId,
      quantity
    }))
    dispatch(updateCartAmmount({
      ammount: quantity
    }))
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 5000)
  }


  return {
    formik,
    book,
    quantity,
    loading,
    visible,
    isSuccessInCart,
    increase,
    accessTokenSaved,
    decrease,
    addProductToCart,
    message,
    createReviewAsync,
    loadingBuyProduct,
    books,
    dispatch
  }
}

export default ProductDetailViewModel