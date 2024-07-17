import React, { useState, useEffect } from 'react'

const Quotes = () => {
  const [quote, setQuote] = useState('Loading...')
  const [author, setAuthor] = useState('...')
  const apiKey = import.meta.env.VITE_API_KEY

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': apiKey
        }
      })
      const data = await response.json()
      if (data && data.length > 0) {
        setQuote(data[0].quote)
        setAuthor(data[0].author)
      }
    } catch (error) {
      console.error('Error fetching quote:', error)
    }
  }

    useEffect(() => {
      fetchQuote();
  const interval = setInterval(fetchQuote, 5000);

  return () => clearInterval(interval);
    }, []);

  return (
    <div className='bg-white mx-1 mt-6 p-3 max-h-[32vh] max-w-full overflow-ellipsis overflow-hidden rounded-xl'>
      <div className=" relative">
        <p className="text-xl font-semibold overflow-ellipsis ">"{quote}"</p>
        <p className=" text-base text-right font-normal italic mr-2 mt-1 text-[#747474] ">- {author}</p>
      </div>
    </div>
  )
}

export default Quotes
