const SalesPipelineChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <FunnelChart>
      <Tooltip />
      <Funnel
        dataKey="value"
        data={data}
        isAnimationActive
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
      </Funnel>
    </FunnelChart>
  </ResponsiveContainer>
);

export default SalesPipelineChart;
