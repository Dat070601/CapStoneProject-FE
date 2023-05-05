import axios from 'axios'

const searchByNameAsync = async (url, { name }) => {
  try {
    const response = await axios.get(`${url}/api/search?nameSearch=${name}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export { searchByNameAsync }