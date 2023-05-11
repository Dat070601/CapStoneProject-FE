import axios from "axios"

const fetchGetProvince = async () => {
    try {
        const response = await axios.get(`https://vapi.vnappmob.com/api/province/`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export {fetchGetProvince}