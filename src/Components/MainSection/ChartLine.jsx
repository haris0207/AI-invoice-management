import React from 'react'

import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <div style={{backgroundColor:"white", marginBottom:"28px", 
       boxShadow: "2px 4px rgb(233, 233, 233)",borderRadius:"8px"
    }}>
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      
      width={1000}
      height={300}
    />
    </div>
  );
}