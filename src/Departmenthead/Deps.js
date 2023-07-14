import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Depstyle.css';


const Deps= () => {
  const [employees, setEmployees] = useState([]);
  const [editEmployeeId, setEditEmployeeId] = useState('');
  const [updatedEmployeeData, setUpdatedEmployeeData] = useState({
    name: '',
    position: '',
    department: ''
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/employees');
      const filteredEmployees = response.data.filter((employee) => employee.department === ' Deps');
      setEmployees(filteredEmployees);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEmployee = async (employeeId) => {
    try {
      await axios.delete(`http://localhost:8000/api/employees/${employeeId}`);
      fetchEmployees(); // Refresh the employee list after deletion
    } catch (error) {
      console.error(error);
    }
  };

  const editEmployee = (employeeId, employeeData) => {
    setEditEmployeeId(employeeId);
    setUpdatedEmployeeData(employeeData);
  };

  const cancelEdit = () => {
    setEditEmployeeId('');
    setUpdatedEmployeeData({
      name: '',
      position: '',
      department: ''
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedEmployeeData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  


  const updateEmployee = async (employeeId) => {
    try {
      await axios.put(`http://localhost:8000/api/employees/${employeeId}`, {
        ...updatedEmployeeData
      });
      cancelEdit(); // Clear edit state and input fields
      await fetchEmployees(); // Refresh the employee list after editing
    } catch (error) {
      console.error(error);
    }
  };
  
  
  

  return (
    <div>
      <h1>Employee List</h1>
      <table className="container">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.empId}</td>
              <td>
                {editEmployeeId === employee._id ? (
                  <input
                    type="text"
                    name="name"
                    value={updatedEmployeeData.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.name
                )}
              </td>
              <td>
                {editEmployeeId === employee._id ? (
                  <input
                    type="text"
                    name="position"
                    value={updatedEmployeeData.position}
                    onChange={handleInputChange}
                  />
                ) : (
                  employee.position
                )}
              </td>
              <td>{employee.department}</td>
              <td>
                {editEmployeeId === employee._id ? (
                  <React.Fragment>
                    <button onClick={() => updateEmployee(employee._id)}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </React.Fragment>
                ) : (
                  <button onClick={() => editEmployee(employee._id, employee)}>Edit</button>
                )}
                <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deps;