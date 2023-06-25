import React from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {name: 'Week 1', Guest: 0, User: 200},
  {name: 'Week 2', Guest: 500, User: 450},
  {name: 'Week 3', Guest: 350, User: 470},
  {name: 'Week 4', Guest: 140, User: 340},
  {name: 'Week 5', Guest: 370, User: 140},
]

const LineGraph = () => (
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Guest" stroke="#e0162e" />
      <Line type="monotone" dataKey="User" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
)

export default LineGraph
