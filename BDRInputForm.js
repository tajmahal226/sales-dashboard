import { inputStyle, buttonStyle } from './styles.js';

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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="BDR Name"
        required
        style={inputStyle}
      />
      <input
        type="number"
        name="calls"
        value={formData.calls}
        onChange={handleChange}
        placeholder="Number of Calls"
        required
        style={inputStyle}
      />
      <input
        type="number"
        name="emails"
        value={formData.emails}
        onChange={handleChange}
        placeholder="Number of Emails"
        required
        style={inputStyle}
      />
      <input
        type="number"
        name="meetings"
        value={formData.meetings}
        onChange={handleChange}
        placeholder="Number of Meetings"
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Add/Update BDR Data</button>
    </form>
  );
};

export default BDRInputForm;
