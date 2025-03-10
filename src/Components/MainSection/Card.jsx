import React from 'react'

function Card({param}){
  return (
    <div className='card'>
        <div className='invoiceCard'>
            <p className='text'>Total Invoices Processed</p>
            <p className='numbers'>1,850</p>
        </div>
        <img src={param}/>
    </div>
  )
}

export default Card