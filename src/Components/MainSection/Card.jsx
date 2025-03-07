import React from 'react'

function Card() {
  return (
    <div className='card'>
        <div className='invoiceCard'>
            <p className='text'>Total Invoices Processed</p>
            <p className='numbers'>1,850</p>
        </div>
        <img src="/images/invoice.svg" alt="invoice" />
    </div>
  )
}

export default Card