import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function EmployeeDetailsPage({ onSave, onClose }) {
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfJoin, setDateOfJoin] = useState("");
  const [isManager, setIsManager] = useState(false);

  function handleSave() {
    if (!fullName || !designation || !dateOfJoin) {
      alert("Please fill all fields");
      return;
    }

    const [firstName, ...rest] = fullName.trim().split(" ");
    const lastName = rest.join(" ");
    const newEmployee = {
      id: Date.now(),
      firstName,
      lastName,
      designation,
      dateOfJoin,
      isManager,
    };

    onSave(newEmployee);
    onClose();
  }

  function handleDelete() {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      onClose();
    }
  }

  function handleClose() {
    setFullName("");
    setDesignation("");
    setDateOfJoin("");
    setIsManager(false);
  }

  function handleReset() {
    setFullName("");
    setDesignation("");
    setDateOfJoin("");
    setIsManager(false);
  }

  return (
    <div className="container p-2 pt-0 ps-0 mt-0 rounded bg-white">
      <h2 className="mb-4">Add/Edit/Delete Employee</h2>
      <div className="form-group mb-3">
        <label>Full Name: </label>
        <input
          type="text"
          className="form-control"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label>Designation: </label>
        <input
          type="text"
          className="form-control"
          value={designation}
          placeholder="Enter designation"
          onChange={(e) => setDesignation(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label>Date of Join: </label>
        <input
          type="date"
          className="form-control"
          value={dateOfJoin}
          onChange={(e) => setDateOfJoin(e.target.value)}
        />
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="isManager"
          checked={isManager}
          onChange={(e) => setIsManager(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="isManager">
          Is Manager
        </label>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-danger me-2 " onClick={handleDelete}>
          Delete
        </button>
        <button className="btn btn-secondary me-2" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-warning me-2" onClick={onClose}>
          Close
        </button>
        <button className="btn btn-success me-2" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EmployeeDetailsPage;
