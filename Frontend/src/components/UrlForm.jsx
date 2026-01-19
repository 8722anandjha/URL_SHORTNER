import React, { useState } from 'react'
import axiosInstance from '../utils/axisoInstance';

const UrlForm = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("")
    const [copied, setCopied] = useState(false);

    // console.log(url)
    const handleSubmit=async()=>{
        const {data} = await axiosInstance.post("/api/create",{url});
        setShortUrl(data.short_url)
        console.log(data.short_url)
    }
    const handleCopy = () => {
     navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
    };

  return (
    <div>
        <div>
            <label htmlFor="url" className='block text-md font-medium text-gray-600 h-8'>
                Enter your URL
            </label>
            <input type="url" value={url}  onChange={(e)=> setUrl(e.target.value)} id="url" placeholder='https://example.com' required 
            className='w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus '/>
        </div>
        <button
        type='submit'
        onClick={handleSubmit}
        className='w-full bg-blue-500 text-white py-2 px-4 
        rounded-md'
        >
            Shorten URL
        </button>
        {shortUrl && (
        <div className='mt-6'>
            <h2 className='text-lg font-semibold mb-2 '>Your shortened URL</h2>
            <div className='flex items-center'>
                <input 
                type="text"
                readOnly
                value={shortUrl}
                className='flex-1 p-2 border-gray-300 rounded-l-md bg-amber-100 '
                />
                <button 
                onClick={handleCopy}
                className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${
                copied
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
                }`}
                >
                {copied? 'Copied!':'Copy'}
                </button>
            </div>
        </div>
        )

        }
    </div>
    
  )
}

export default UrlForm