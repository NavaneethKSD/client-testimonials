const TestimonialCard = ({ name, review }) => {
    return (
      <div style={{
        border: "1px solid #ddd",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        maxWidth: "400px"
      }}>
        <h3>{name}</h3>
        <p>{review}</p>
      </div>
    );
  };
  
  export default TestimonialCard;
  