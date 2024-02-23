import axios, { AxiosError } from "axios"

export const fetchUser = async (accessToken: string) => {
    try {
        const response = await axios.get(`https://graph.facebook.com/v19.0/me?access_token=${accessToken}`)

        if(response) {
            return response.data
        }
    } catch (error) {
        if(error instanceof AxiosError) {
            console.log('FETCH_USER_ERROR: ', error.message)
        }
    }
}