const Card = ({ title, children }) => (
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', margin: '16px 0', padding: '16px' }}>
    <h2 style={{ marginTop: 0 }}>{title}</h2>
    {children}
  </div>
);

export default Card;
