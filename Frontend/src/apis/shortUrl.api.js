import axiosInstance from "../utils/axisoInstance.js"

export const createShortUrl = async(url)=>{
    const {data} = await axiosInstance.use("/api/create",{url})
    console.log(data)
    return data.shortUrl
}