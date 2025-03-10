import { LinearProgress } from '@mui/material'
import React, { useState } from 'react'

export default function Invoice(){
    const [progress,setProgress]=useState(null)
   function handlChange(){
    setProgress(50)
   }
    return(
        <div className='invoiceWrapper'>
        <div className='invoiceContainer'>
        <label for="avatar" className='text'><p>Drag & drop your files here</p>
        Choose a profile picture:</label> OR
<br/>
<input type="file" id="invoice" name="invoice" accept="image/png, image/jpeg" onChange={handlChange}/>
<progress id="file" value={progress} max="100"> 32% </progress>
        </div>
        </div>
    )
}