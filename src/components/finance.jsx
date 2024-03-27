import React, { useState } from 'react';

const Finance = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    { id: 1, name: 'John Doe', invoice: 'invoice1.pdf', status: 'Pending' },
    { id: 2, name: 'Jane Smith', invoice: 'invoice2.pdf', status: 'Accepted' },
    { id: 3, name: 'Alice Johnson', invoice: 'invoice3.pdf', status: 'Rejected' },
  ];

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleAccept = (employee) => {
    // Handle accept logic
  };

  const handleReject = (employee) => {
    // Handle reject logic
  };

  return (
    <div className='container'>
      <h1 className='header'>Finance Overview</h1>
      <div className='list'>
      {employees.map((employee) => (
        <div key={employee.id} className="emp-entry"> 
          <div className='emp-details'>
            <p>{employee.name}</p>
            <p>Invoice: {employee.invoice}</p>
            <p>Status: {employee.status}</p>
          </div>
          <div className="button-container"> 
            <button onClick={() => handleAccept(employee)}>Accept</button>
            <button onClick={() => handleReject(employee)}>Reject</button>

            <br/>
            <button onClick={() => handleEmployeeClick(employee)}>View Details</button>
          </div>
        </div>
      ))}
      </div>
      {selectedEmployee && (
        <div className="overlay">
          <div>
            <h2>Employee Details</h2>
            <p>ID: {selectedEmployee.id}</p>
            <p>Name: {selectedEmployee.name}</p>
            <p>Status: {selectedEmployee.status}</p>
          </div>
          <div>
            <h2>Uploaded Invoice</h2>
            <embed src={selectedEmployee.invoice} type="application/pdf" width="400" height="600" />
          </div>
          <button onClick={() => setSelectedEmployee(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Finance;
