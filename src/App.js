import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>Live Text Input</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={styles.input}
      />

      <p style={styles.output}>
        {text ? `You typed ${text}` : "Start typing to see output"}
      </p>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "100px",
    textAlign: "center",
    fontFamily: "Arial"
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "250px"
  },
  output: {
    marginTop: "20px",
    fontSize: "18px"
  }
};

export default App;
