import BDRPerformanceChart from './BDRPerformanceChart.js';
import Leaderboard from './Leaderboard.js';
import SalesPipelineChart from './SalesPipelineChart.js';
import BDRInputForm from './BDRInputForm.js';
import Card from './Card.js';

const EnhancedSalesDashboard = () => {
  const [bdrData, setBdrData] = useState([]);
  const [pipelineData, setPipelineData] = useState([]);

  useEffect(() => {
    // Initialize with some mock pipeline data
    setPipelineData([
      { name: 'Leads', value: 5000 },
      { name: 'Qualified', value: 3000 },
      { name: 'Proposals', value: 1200 },
      { name: 'Negotiations', value: 600 },
      { name: 'Closed', value: 200 },
    ]);
  }, []);

  const handleBDRSubmit = (newData) => {
    setBdrData(prevData => {
      const existingIndex = prevData.findIndex(bdr => bdr.name === newData.name);
      if (existingIndex !== -1) {
        // Update existing BDR data
        const updatedData = [...prevData];
        updatedData[existingIndex] = newData;
        return updatedData;
      } else {
        // Add new BDR data
        return [...prevData, newData];
      }
    });
  };

  return (
    <div>
      <Card title="Add/Update BDR Data">
        <BDRInputForm onSubmit={handleBDRSubmit} />
      </Card>

      <Card title="BDR Performance">
        <BDRPerformanceChart data={bdrData} />
      </Card>

      <Card title="BDR Leaderboard">
        <Leaderboard data={bdrData} />
      </Card>

      <Card title="Sales Pipeline">
        <SalesPipelineChart data={pipelineData} />
      </Card>
    </div>
  );
};

export default EnhancedSalesDashboard;
