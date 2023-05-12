import axios from "axios";

const fetchAddReviewAsync = async (url, token, data) => {
    try {        
        const response = await axios({
            method: "POST",
            headers: {
              "Authorization": `bearer ${token}`
            },
            url: `${url}/api/review`,
            data
          })
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export {fetchAddReviewAsync}