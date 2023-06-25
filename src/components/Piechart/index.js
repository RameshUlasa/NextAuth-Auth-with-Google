import React from 'react'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const Piechart = () => {
  const vaccinationByAgeDetails = [
    {name: 'Basic Tees', count: 250},
    {name: 'Custom Short Pants', count: 400},
    {name: 'Super Hoodies', count: 150},
  ]

  const legendItems = vaccinationByAgeDetails.map(({name, count}, index) => ({
    value: name,
    type: 'circle',
    id: index,
    color: ['#EE8484', '#F6DC7D', '#98D89E'][index],
  }))

  return (
    <ResponsiveContainer width="100%" height={192}>
      <PieChart>
        <Pie
          data={vaccinationByAgeDetails}
          cx="50%"
          cy="50%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell fill="#EE8484" />
          <Cell fill="#F6DC7D" />
          <Cell fill="#98D89E" />
        </Pie>

        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right" // Align legend items to the right
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          payload={legendItems.map(item => ({
            ...item,
            color: item.color,
          }))}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Piechart
