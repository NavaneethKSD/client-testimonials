import TestimonialCard from "./components/TestimonialCard";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <TestimonialCard name="Emily Watson" review="This service was amazing! Highly recommended." />
      <TestimonialCard name="John Doe" review="Great experience, will use again!" />
    </div>
  );
}

export default App;
