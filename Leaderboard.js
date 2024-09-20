import { tableHeaderStyle, tableCellStyle } from './styles.js';

const Leaderboard = ({ data }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th style={tableHeaderStyle}>BDR</th>
        <th style={tableHeaderStyle}>Calls</th>
        <th style={tableHeaderStyle}>Emails</th>
        <th style={tableHeaderStyle}>Meetings</th>
        <th style={tableHeaderStyle}>Conversion Rate</th>
      </tr>
    </thead>
    <tbody>
      {data.map((bdr, index) => (
        <tr key={index}>
          <td style={tableCellStyle}>{bdr.name}</td>
          <td style={tableCellStyle}>{bdr.calls}</td>
          <td style={tableCellStyle}>{bdr.emails}</td>
          <td style={tableCellStyle}>{bdr.meetings}</td>
          <td style={tableCellStyle}>{(bdr.meetings / bdr.calls * 100).toFixed(2)}%</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Leaderboard;
