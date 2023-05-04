import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { searchSelector } from '../../stores/reducers/SearchReducer'
import SearchResultViewModel from '../../components/Search/SearchResultViewModel'

const SearchViewModel = () => {
  const { input } = SearchResultViewModel()
  const { results } = useSelector(searchSelector)
  const params = useParams()
  const keyword = params.keyword

  return {
    keyword,
    input,
    results
  }
}

export default SearchViewModel