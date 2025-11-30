import React from "react";

const StudentCard = ({ name, course, score }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>Course: {course}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default StudentCard;
