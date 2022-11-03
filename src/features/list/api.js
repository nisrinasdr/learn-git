import axios from "axios"

export const getListUser = async () => {
    return await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.data)
        .catch(error => {
            throw error
        })
}