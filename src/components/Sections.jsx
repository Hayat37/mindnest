function Sections() {
  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      
      {/* Focus */}
      <div style={cardStyle}>
        <h2>🌟 Focus Today</h2>
      </div>

      {/* Next */}
      <div style={cardStyle}>
        <h2>📌 Do Next</h2>
      </div>

      {/* Later */}
      <div style={cardStyle}>
        <h2>🕊 Later</h2>
      </div>

    </div>
  );
}

const cardStyle = {
  backgroundColor: "#BFA38A",
  padding: "20px",
  borderRadius: "12px",
  width: "30%",
  minHeight: "200px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
};

export default Sections;