import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL)
                const data = await response.json()
                setData(data)
                setLoading(false)
              }
              catch (error) {
                console.log(error)
                setError(error)
              }
        }
        fetchData();
    }, [url]);
    return { data, loading, error };
}

export default useFetch;