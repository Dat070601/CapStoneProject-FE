import axios from 'axios'

const searchByNameAsync = async (url, { name, type }) => {
  try {
    const response = await axios.get(`${url}/api/search?name=${name}&type=${type}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export { searchByNameAsync }