const BDRPerformanceChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="calls" fill="#0088FE" />
      <Bar dataKey="emails" fill="#00C49F" />
      <Bar dataKey="meetings" fill="#FFBB28" />
    </BarChart>
  </ResponsiveContainer>
);

export default BDRPerformanceChart;
