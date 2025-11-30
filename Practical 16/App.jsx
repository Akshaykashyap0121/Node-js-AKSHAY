import React from "react";
import StudentCard from "./StudentCard";
import SimpleForm from "./SimpleForm";

function App() {
  return (
    <div>
      <h1>Student Details</h1>

      <StudentCard name="Mayank Thakur" course="React.js" score="90" />
      <StudentCard name="Aman Sharma" course="Node.js" score="85" />
      <StudentCard name="Priya Singh" course="Python" score="92" />

      <SimpleForm />
    </div>
  );
}

export default App;
