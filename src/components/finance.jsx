import React, { useState } from 'react';

const Finance = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeeDetails, setEmployeeDetails] = useState(null);

  const employees = [
    { id: 1, name: 'Person 1', invoice: 'invoice1.pdf', status: 'Pending' },
    { id: 2, name: 'Person 2', invoice: 'invoice2.pdf', status: 'Accepted' },
    { id: 3, name: 'Person 3', invoice: 'invoice3.pdf', status: 'Rejected' },
    { id: 4, name: 'Person 4', invoice: 'invoice4.pdf', status: 'Rejected' },
    { id: 5, name: 'Person 5', invoice: 'invoice5.pdf', status: 'Rejected' },
  ];

  const handleEmployeeClick = (employee) => {
    // Simulating a backend call
    fetch(`your-backend-url/employee/${employee.id}`)
      .then((response) => response.json())
      .then((data) => {
        setEmployeeDetails(data);
        setSelectedEmployee(employee);
      })
      .catch((error) => console.error('Error fetching employee details:', error));
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
              <button className="acc" onClick={() => handleAccept(employee)}>Accept</button>
              <button className="rej" onClick={() => handleReject(employee)}>Reject</button>
              <br/>
              <button className="view" onClick={() => handleEmployeeClick(employee)}>View Details</button>
            </div>
          </div>
        ))}
      </div>
      {selectedEmployee && (
        <div className="overlay">
          <div className='left'>
            <h2>Employee Details</h2>
            <p>ID: {selectedEmployee.id}</p>
            <p>Name: {selectedEmployee.name}</p>
            <p>Status: {selectedEmployee.status}</p>
            {employeeDetails && (
              <div>
                <h2>Additional Details</h2>
                <p>Invoice Number: {employeeDetails.invoiceNumber}</p>
                <p>Bill Date: {employeeDetails.billDate}</p>
                <p>Due Date: {employeeDetails.due_date}</p>
                <p>Client Name: {employeeDetails.client_name}</p>
                <p>Client Address: {employeeDetails.client_address}</p>
                <p>Client Email: {employeeDetails.client_email}</p>
                <p>Client Phone: {employeeDetails.client_phone}</p>
                <p>Supplier Name: {employeeDetails.supplier_name}</p>
                <p>Supplier Address: {employeeDetails.supplier_address}</p>
                <p>Supplier Email: {employeeDetails.supplier_email}</p>
                <p>Supplier Phone: {employeeDetails.supplier_phone}</p>
                <p>Tax: {employeeDetails.tax}</p>
                <p>Sub Total: {employeeDetails.sub_total}</p>
                <p>Grand Total: {employeeDetails.grand_total}</p>
                {employeeDetails.remark && <p>Remark: {employeeDetails.remark}</p>}
                {employeeDetails.image && (
                  <div>
                    <h3>Image:</h3>
                    <img src={employeeDetails.image} alt="Invoice" />
                  </div>
                )}
              </div>
            )}
          </div>
          <div className='right'>
            <button className="close" onClick={() => setSelectedEmployee(null)}>Close</button>
            <h2>Uploaded Invoice</h2>
            <embed src={selectedEmployee.invoice} type="application/pdf" width="400" height="600" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Finance;
