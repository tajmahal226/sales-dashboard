<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sales Dashboard</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://unpkg.com/recharts/umd/Recharts.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;
        const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, FunnelChart, Funnel, LabelList } = Recharts;

        // Card component
        const Card = ({ title, children }) => (
            <div className="card">
                <h2>{title}</h2>
                {children}
            </div>
        );

        // BDR Performance Chart component
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

        // Leaderboard component
        const Leaderboard = ({ data }) => (
            <table>
                <thead>
                    <tr>
                        <th>BDR</th>
                        <th>Calls</th>
                        <th>Emails</th>
                        <th>Meetings</th>
                        <th>Conversion Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((bdr, index) => (
                        <tr key={index}>
                            <td>{bdr.name}</td>
                            <td>{bdr.calls}</td>
                            <td>{bdr.emails}</td>
                            <td>{bdr.meetings}</td>
                            <td>{(bdr.meetings / bdr.calls * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );

        // Sales Pipeline Chart component
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

        // BDR Input Form component
        const BDRInputForm = ({ onSubmit }) => {
            const [formData, setFormData] = useState({
                name: '',
                calls: '',
                emails: '',
                meetings: ''
            });

            const handleChange = (e) => {
                const { name, value } = e.target;
                setFormData(prevData => ({
                    ...prevData,
                    [name]: value
                }));
            };

            const handleSubmit = (e) => {
                e.preventDefault();
                onSubmit({
                    ...formData,
                    calls: Number(formData.calls),
                    emails: Number(formData.emails),
                    meetings: Number(formData.meetings)
                });
                setFormData({ name: '', calls: '', emails: '', meetings: '' });
            };

            return (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="BDR Name"
                        required
                    />
                    <input
                        type="number"
                        name="calls"
                        value={formData.calls}
                        onChange={handleChange}
                        placeholder="Number of Calls"
                        required
                    />
                    <input
                        type="number"
                        name="emails"
                        value={formData.emails}
                        onChange={handleChange}
                        placeholder="Number of Emails"
                        required
                    />
                    <input
                        type="number"
                        name="meetings"
                        value={formData.meetings}
                        onChange={handleChange}
                        placeholder="Number of Meetings"
                        required
                    />
                    <button type="submit">Add/Update BDR Data</button>
                </form>
            );
        };

        // Main Dashboard component
        const SalesDashboard = () => {
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

        // Render the main component
        ReactDOM.render(<SalesDashboard />, document.getElementById('root'));
    </script>
</body>
</html>
