import React from 'react';
import {
  LineChart,
  Line,
  Label,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const LineChartCard = ({ width = 800, height = 400, title, data, yLabel }) => {
  const CustomTooltip = ({ payload, active }, ...props) => {
    if (active && payload && payload.length) {
      return <p>{`${payload[0].value} MB`}</p>;
    }
    return null;
  };

  <Tooltip content={<CustomTooltip />} />;

  return (
    <div className="w-full bg-white dark:bg-gray-800 inline-block shadow-lg mx-auto rounded-md p-4 my-2">
      <p className="ml-6 text-gray-500">{title}</p>
      <ResponsiveContainer width="100%" height={height}>
        {/* <div className=" items-center"> */}
        <LineChart
          data={data}
          margin={{ top: 25, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="usage" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month">
            <Label offset={0} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: { yLabel },
              angle: -90,
              position: 'insideLeft'
            }}
          />
          <Legend />
          <Tooltip />
        </LineChart>
        {/* </div> */}
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartCard;
