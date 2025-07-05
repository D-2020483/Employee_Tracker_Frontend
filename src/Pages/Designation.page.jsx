import React, { useState } from "react";

function DesignationPage() {
  //state manage for form input remark  and the designation
  const [formData, setFormData] = useState({ name: "", remark: "" });

  //state to store the list of designation
  const [designations, setDesignations] = useState([
    { id: 1, name: "Manager", remark: "asfsdf" },
    { id: 2, name: "Developer", remark: "test" },
  ]);

  //call when a value chages in inputfield
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  //call when form was submited and reload the page
  function handleSubmit(e) {
    e.preventDefault();

    //new id generate for the new entry
    const newId = designations.length + 2;

    //create a new entry
    const newEntry = {
      id: newId,
      name: formData.name,
      remark: formData.remark,
    };

    //new entry to the designation list
    setDesignations([...designations, newEntry]);

    //clear the field after submition
    setFormData({ name: "", remark: "" });
  }

  //reset the form data
  function handleReset() {
    setFormData({ name: "", remark: "" });
  }

  return (
    <div className="container mt-5">
        <div className="card-body">
          <h2 className="card-title mb-4">Add New Designation</h2>

          {/* Form to add new designation */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Designation Name: </label>

              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Remark: </label>
              <input
                type="text"
                className="form-control"
                name="remark"
                value={formData.remark}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary me-2">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleReset}
            >
              Reset
            </button>
          </form>

          {/* Table to display the list of designations */}
          <table className="table table-bordered table-striped mt-4">
            <thead className="table-light">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {designations.map((d) => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default DesignationPage;
