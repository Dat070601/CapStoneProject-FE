import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getNumberOfPageSelector, productMostSellerSelector, productSelector, productTopNewSelector } from '../../stores/reducers/ProductReducer';
import { getNumberOfPageAsyncThunk,fetchProductAsyncThunk, fetchProductBestSellerAsyncThunk, fetchTopNewProductsAsyncThunk } from '../../stores/thunks/ProductThunk';
import { productSelector } from '../../stores/reducers/ProductReducer';

const HomeViewModel = () => {
	const dispatch = useDispatch()
	const { books, booksBestSeller, booksTopNew, page } = useSelector(productSelector)
	// const { booksBestSeller } = useSelector(productMostSellerSelector)
	// const { booksTopNew } = useSelector(productTopNewSelector)
	// const { page }  = useSelector(getNumberOfPageSelector)
	console.log(page)
	const params = useParams()

	useEffect(() => {
		dispatch(fetchProductAsyncThunk(null))
		dispatch(fetchProductBestSellerAsyncThunk(null))
		dispatch(fetchTopNewProductsAsyncThunk(null))
		dispatch(getNumberOfPageAsyncThunk(null))
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
	}
};

export default HomeViewModel;