import React, { useState } from "react";
import EmployeeDetailsPage from "./EmployeeDetails.page.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [designations] = useState([
    { id: 1, name: "Manager" },
    { id: 2, name: "Developer" },
  ]);

  function handleAddNew(emp) {
    setEmployees([...employees, emp]);
    setShowForm(false);
  }

  // Placeholder refresh function
  function handleRefresh() {
    alert("Employee list refreshed");
  }

  return (
    <>
    <div className="container p-4 mt-5 bg-white">
      {/* If showForm is true, show only the form component */}
      {showForm ? (
        <EmployeeDetailsPage
          onSave={handleAddNew}
          onClose={() => setShowForm(false)}
          designations={designations}
        />
      ) : (
        <>
          {/* Header with title and buttons */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="m-0">View/Add Employee</h2>
            <div>
              <button className="btn btn-primary me-2" onClick={handleRefresh}>
                Refresh
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setShowForm(true)}
              >
                Add New
              </button>
            </div>
          </div>

          {/* Table displaying the employee list */}
          <table className="table table-bordered text-center mt-4">
            <thead className="table-light">
              <tr>
                <th>Emp ID</th>
                <th>Designation</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Join</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                // Map each employee into a table row
                employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.designation}</td>
                    <td>{emp.firstName}</td>
                    <td>{emp.lastName}</td>
                    <td>{emp.dateOfJoin}</td>
                  </tr>
                ))
              ) : (
                // Display when no employees exist
                <tr></tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
    </>
  );
}

export default EmployeePage;
