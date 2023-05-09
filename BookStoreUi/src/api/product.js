import axios from 'axios'

const fetchProductAsync = async (url, page) => {
  try {
    const response = await axios.get(`${url}/api/book?page=${page}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const getNumberOfPage = async (url) => {
  try {
    const response = await axios.get(`${url}/api/book/number-page`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const getProductById = async (url, id) => {
  try {
    const response = await axios.get(`${url}/api/book/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const fetchMostProductBestSellerAsync = async (url) => {
  try {
    const response = await axios.get(`${url}/api/book/product-most-seller`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const fetchTopNewProductsAsync = async (url) => {
  try {
    const response = await axios.get(`${url}/api/book/product-top-new`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const fetchBookSameCate = async (url, bookId) => {
  try {
    const response = await axios.get(`${url}/api/book/book-same-cate/${bookId}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export { fetchProductAsync, getProductById, fetchMostProductBestSellerAsync, fetchTopNewProductsAsync, getNumberOfPage, fetchBookSameCate }