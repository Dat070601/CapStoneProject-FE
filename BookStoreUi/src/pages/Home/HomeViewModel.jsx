import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getNumberOfPageSelector, productMostSellerSelector, productSelector, productTopNewSelector } from '../../stores/reducers/ProductReducer';
import { getNumberOfPageAsyncThunk,fetchProductAsyncThunk, fetchProductBestSellerAsyncThunk, fetchTopNewProductsAsyncThunk } from '../../stores/thunks/ProductThunk';
import { productSelector } from '../../stores/reducers/ProductReducer';
import { categorySelector } from '../../stores/reducers/CategoryReducer';
import { fetchCategoryAsyncThunk } from '../../stores/thunks/CategoryThunk';

const HomeViewModel = () => {
	const dispatch = useDispatch()
	const { books, booksBestSeller, booksTopNew, page } = useSelector(productSelector)
	const { cates } = useSelector(categorySelector)
	const params = useParams()

	useEffect(() => {
		dispatch(fetchProductAsyncThunk(null))
		dispatch(fetchProductBestSellerAsyncThunk(null))
		dispatch(fetchTopNewProductsAsyncThunk(null))
		dispatch(getNumberOfPageAsyncThunk(null))
		dispatch(fetchCategoryAsyncThunk(null))
	}, [dispatch])

	useEffect(() => {	
		dispatch(fetchProductAsyncThunk({
        	page: params.page
      }))}, [dispatch, params.page])


	return {
		books, 
		booksBestSeller,
		booksTopNew,
		page,
		cates
	}
};

export default HomeViewModel;