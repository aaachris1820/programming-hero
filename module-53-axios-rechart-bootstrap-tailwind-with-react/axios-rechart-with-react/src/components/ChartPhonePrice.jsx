import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ChartPhonePrice = ({data}) => {
    const barChartData=data.map(x=>{
        const singleData={};
        singleData.name=x.phone_name;
        singleData.price=parseInt(x.slug.split('-')[1]);
        return singleData;
    })
    return (
        <div>
            <BarChart
          width={900}
          height={300}
          data={barChartData}
          margin={{
            top: 5,
            right: 1,
            left: 2,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="price" />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" />
          
        </BarChart>
        </div>
    );
};

export default ChartPhonePrice;