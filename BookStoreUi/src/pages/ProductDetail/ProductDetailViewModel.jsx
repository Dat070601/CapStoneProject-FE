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

const ProductDetailViewModel = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const params = useParams()
  const toast = useToast()
  const { get } = useLocalStorage()

  const { book } = useSelector(productSelector)
  const { isSuccessInCart, carts, message } = useSelector(cartSelector) 
  const { books} = useSelector(productSelector)
  const [ productDefaultPrice, setProductDefaultPrice ] = useState()
  const [ productVariantId, setProductVariantId ] = useState()
  const [ quantity, setQuantity ] = useState(1)
  const [ loading, setLoading ] = useState(true)
  const [ loadingBuyProduct, setLoadingBuyProduct ] = useState(false)
  const [ visible, setVisible ] = useState(false)
  const [ existQuantity, setExistQuantity ] = useState()
  const accessTokenSaved = get({
    key: "accessToken"
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [loading])

  useEffect(() => {
    setTimeout(() => {
      setVariantSelected(book.productVariants[0]?.productVariantName)
      setExistQuantity(book.productVariants[0].quantity)
      setProductVariantId(book.productVariants[0]?.productVariantId)
    }, 500)
  }, [book])

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

  const handleSelectVariant = ({
    existQuantity
  }) => {
    setExistQuantity(existQuantity)
  }

  const getVariantId = (id) => {
    setProductVariantId(id)
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

  const handleBuyNow = ({ orderDetails }) => {
    setLoadingBuyProduct(true)
    dispatch(addOrderAsyncThunk({
      token: accessTokenSaved,
      data: {
        "paymentId": "9b9dad96-726f-4195-aacb-d952f61fca31",
        "phoneNumber": "0775587882",
        "address": "k47/17 Trần Xuân Lê",
        "city": "Đà Nẵng",
        "district": "Thanh Khê",
        orderDetails
      }
    }))
    setTimeout(() => {
      setLoadingBuyProduct(false)
      navigation("/order")
    }, 4000)
  }

  const handleVariantSelected = (variant) => {
    setVariantSelected(variant)
  }

  return {
    book,
    quantity,
    loading,
    productVariantId,
    accessTokenSaved,
    visible,
    existQuantity,
    isSuccessInCart,
    increase,
    decrease,
    handleSelectVariant,
    addProductToCart,
    getVariantId,
    handleVariantSelected,
    message,
    handleBuyNow,
    loadingBuyProduct,
    books
  }
}

export default ProductDetailViewModel