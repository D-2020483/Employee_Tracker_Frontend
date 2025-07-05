import React, { useState } from "react";
import DesignationPage from "./Designation.page.jsx";
import EmployeePage from "./Employee.page.jsx";

function HomePage() {
  //control to show the Designation
  const [showForm, setFormData] = useState(false);
  //Control to show the view/add Employee
  const [showViewAdd, setViewAdd] = useState(false);

  function handleDesignationClick() {
    setViewAdd(false);
    setFormData(true);
  }

  function handleViedAddClick() {
    setViewAdd(true);
    setFormData(false);
  }
  const buttonStyle = {
    width: "180px",
    padding: "10px 20px",
    fontSize: "16px",
    margin: "10px",
    cursor: "pointer",
  };

  const frameStyle = {
    border: "2px solid #ccc",
    borderRadius: "12px",
    width: "80vw",
    height: "80vh",
    margin: "40px auto",
    background: "#fff",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  };

  const buttonContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "24px 0 0 24px",
    display: "flex",
    flexDirection: "row",
    zIndex: 2,
  };

  return (
    <div style={frameStyle}>
      {!showForm && !showViewAdd ? (
        <>
          <div style={buttonContainerStyle}>
            <button onClick={handleDesignationClick} style={buttonStyle}>
              Designation
            </button>
            <button onClick={handleViedAddClick} style={buttonStyle}>
              View/Add Employee
            </button>
          </div>
          <h1 className="text-center w-100 mt-4 mb-4">Interview</h1>
        </>
      ) : showForm ? (
        <DesignationPage />
      ) : (
        <EmployeePage />
      )}
    </div>
  );
}

export default HomePage;
