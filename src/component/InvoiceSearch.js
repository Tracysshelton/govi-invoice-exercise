import React, { useState } from 'react'
import Invoice from './Invoice'
import Pagination from './Pagination'
import '../assets/css/invoice-style.css'
import useInvoiceSearch from '../hooks/useInvoiceSearch'

const InvoiceSearch = () => {

    const [output, setOutput] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [invoicesPerPage] = useState(15)

    const {
        isLoaded,
        error,
        invoices
    } = useInvoiceSearch()

    const returnAllInvoices = () => {
        setCurrentPage(1)
        setOutput(invoices)
    }

    const returnAllPaidInvoices = () => {
        setCurrentPage(1)
        setOutput(invoices.filter(invoice => {
            return invoice.paid === true
        }))
    }

    const returnAllUnPaidInvoices = () => {
        setCurrentPage(1)
        setOutput(invoices.filter(invoice => {
            return invoice.paid === false
        }))
    }

    const indexOfLastInvoice = currentPage * invoicesPerPage
    const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage
    const currentPages = output.slice(indexOfFirstInvoice, indexOfLastInvoice)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="container">
            <div>
                <h1>Invoice Search</h1>
                <button
                    onClick={returnAllInvoices}>
                    All invoices
                </button>
                <button
                    onClick={returnAllPaidInvoices}>
                    Paid invoices
                </button>
                <button
                    onClick={returnAllUnPaidInvoices}>
                    UnPaid Invoices
                </button>
            </div>
            <Pagination
                invoicesPerPage={invoicesPerPage}
                totalInvoices={output.length}
                paginate={paginate}
            />
            <Invoice
                output={currentPages}
                isLoaded={isLoaded}
                error={error}
            />
        </div>
    )


}

export default InvoiceSearch;