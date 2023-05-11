import axios from "axios";

const fetchGetParentCategoryAsync = async (url) => {
    try {
        const response = await axios.get(`${url}/api/category/sub`)
        return response.data
      } catch (error) {
        console.log(error)
      }
}
const fetchGetBookByCateAsync = async (url, categoryId) => {
    try {
      const response = await axios.get(`${url}/api/category/${categoryId}`)
      return response.data
    } catch (error) {
      console.log(error);
    }
}
export {fetchGetParentCategoryAsync, fetchGetBookByCateAsync}