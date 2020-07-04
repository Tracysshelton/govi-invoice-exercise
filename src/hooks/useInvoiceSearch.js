import { useState, useEffect } from 'react';
import axios from 'axios'

const useInvoiceSearch = () => {
    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [invoices, setInvoices] = useState([])
    useEffect(() => {
        axios.get(`https://bcore-mock.herokuapp.com/invoice`)
            .then(res => {
                setInvoices(res.data)
                setIsLoaded(true)
            })
            .catch(err => {
                setError(err.message)
                setIsLoaded(true)
            })
    }, [])

    return ({ error, isLoaded, invoices })

}

export default useInvoiceSearch