import React, { useState } from "react";

const SimpleForm = () => {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(text);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {submittedText && <p>You typed: {submittedText}</p>}
    </div>
  );
};

export default SimpleForm;
