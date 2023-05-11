import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { categorySelector } from '../../stores/reducers/CategoryReducer'
import { fetchGetBookByCategoryAsyncThunk } from '../../stores/thunks/CategoryThunk'

const CateogryViewModel = () => {
  const dispatch = useDispatch()
  const { cate } = useSelector(categorySelector)
  const [ loading, setLoading ] = useState(true)
  const params = useParams()

  console.log(cate)

  useEffect(() => {
    window.scrollTo(0, 0)
  },[loading])

  useEffect(() => {
    dispatch(fetchGetBookByCategoryAsyncThunk({
      categoryId: params.categoryId
    }))
  },[dispatch, params.categoryId])


  return {
    cate,
    loading
  }
}

export default CateogryViewModel