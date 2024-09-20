const { useState, useEffect } = React;
const { BarChart, Bar, FunnelChart, Funnel, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } = Recharts;

// Import components
import EnhancedSalesDashboard from './EnhancedSalesDashboard.js';

ReactDOM.render(<EnhancedSalesDashboard />, document.getElementById('root'));
