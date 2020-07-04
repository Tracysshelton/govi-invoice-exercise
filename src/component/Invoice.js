import React from 'react';

// Individual invoice
const Invoice = ({ output, isLoaded, error }) => {
    
    // Error on load
    if (error) {
        return <div>Error: {error.message}</div>
    }

    // Loading
    if (!isLoaded) {
        return <div>Loading.....</div>
    }

    // Return list of Invoices
    return(
        <table className="invoices">
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Due Date</th>
                    <th>Paid</th>
                    <th>Paid Date</th>
                </tr>
            </thead>
            <tbody>
                {output.map(invoice => (
                    <tr className="invoices" key={invoice.id}>
                        <td><strong>${invoice.amount}</strong></td>
                        <td>{invoice.date}</td>
                        <td>{invoice.due}</td>
                        <td><strong>{invoice.paid ? 'PAID' : 'DUE'}</strong></td>
                        <td>{invoice.paidDate}</td>                   
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Invoice;