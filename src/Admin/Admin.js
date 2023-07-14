import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';
import { NavDropdown } from 'react-bootstrap';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('/api/employees');
      setEmployees(response.data);
      // setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { empId, name, position, department } = e.target.elements;

    const newEmployee = {
      empId: empId.value,
      name: name.value,
      position: position.value,
      department: department.value,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/employees', newEmployee);
      setEmployees([...employees, response.data]);
    } catch (error) {
      console.error(error);
    }

    // Clear input fields
    e.target.reset();
  };

  return (
    <div>
     
       {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
        

      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
      <div className='container'>
      <div>
          <label htmlFor="empId">Employee ID:</label>
          <input type="text" id="empId" required />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" required />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" required/>
          <NavDropdown title="add " id="collasible-nav-dropdown">
              
              <NavDropdown.Item href="/neuro">Neurology</NavDropdown.Item>
              <NavDropdown.Item href="/Ortho">Orthopedics</NavDropdown.Item>
               <NavDropdown.Item href="/General"> General surgery </NavDropdown.Item>
               <NavDropdown.Item href="/Cardio">Cardiology</NavDropdown.Item>
          </NavDropdown>
          
          
          
        </div><br></br>
        <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeList;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Admin.css';
// import { NavDropdown } from 'react-bootstrap';



// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('/api/employees');
//       setEmployees(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { empId, name, position, department } = e.target.elements;

//     const newEmployee = {
//       empId: empId.value,
//       name: name.value,
//       position: position.value,
//       department: department.value,
//     };

//     try {
//       const response = await axios.post('http://localhost:8000/api/employees', newEmployee);
//       setEmployees([...employees, response.data]);
//     } catch (error) {
//       console.error(error);
//     }

//     // Clear input fields
//     e.target.reset();
  

// const Admin = () => {
//   const [todos, setTodos] = useState([]);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [age, setAge] = useState('');
//   const [editingItemId, setEditingItemId] = useState(null);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await axios.get('http://localhost:6000/api/employees');
//       setTodos(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addTodo = async () => {
//     try {
//       const response = await axios.post('http://localhost:6000/api/employees', {
//         name,
//         description,
//         age
//       });
//       setTodos([...todos, response.data]);
//       setName('');
//       setDescription('');
//       setAge('');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`http://localhost:6000/api/employees/${id}`);
//       setTodos(todos.filter((todo) => todo._id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const editTodo = (id) => {
//     setEditingItemId(id);
//     const todo = todos.find((todo) => todo._id === id);
//     if (todo) {
//       setName(todo.name);
//       setDescription(todo.description);
//       setAge(todo.age);

//     }
//   };

//   const updateTodo = async () => {
//     try {
//       await axios.put(`http://localhost:6000/api/employees/${editingItemId}`, {
//         name,
//         description,
//         age
//       });
//       const updatedTodos = todos.map((todo) =>
//         todo._id === editingItemId ? { ...todo, name, description,age } : todo
//       );
//       setTodos(updatedTodos);
//       setEditingItemId(null);
//       setName('');
//       setDescription('');
//       setAge('');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const cancelEdit = () => {
//     setEditingItemId(null);
//     setName('');
//     setDescription('');
//     setAge('');

//   };

//   return (
//     <div className="todo-list-container">
//       <h1>Admin page!</h1>
//       <form onSubmit={editingItemId ? updateTodo : addTodo}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="NAME"
//           value={name}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />

//               <NavDropdown title="add employee" id="collasible-nav-dropdown">
//               <button type="submit" className="dButton">
//           {editingItemId ? 'Update Todo' : 'Add employee'}

//         </button>
//               <NavDropdown.Item href="/neuro">Neurology</NavDropdown.Item>
//               <NavDropdown.Item href="/Ortho">Orthopedics</NavDropdown.Item>
//                <NavDropdown.Item href="/General"> General surgery </NavDropdown.Item>
//                <NavDropdown.Item href="/Cardio">Cardiology</NavDropdown.Item>
//             </NavDropdown>

//         {/* <button type="submit" className="dButton">
//           {editingItemId ? 'Update Todo' : 'Add employee'}

//         </button> */}
//         {editingItemId && (
//           <button type="submit" onClick={cancelEdit} className="dButton">
//             Cancel
//           </button>
//         )}
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo._id}>
//             {editingItemId === todo._id ? (
//               <div>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   value={age}
//                   onChange={(e) => setAge(e.target.value)}
//                 />
//                 <button onClick={updateTodo} className="dButton">Save</button>
//                 <button onClick={cancelEdit} className="dButton">Cancel</button>
//               </div>
//             ) : (
//               <div>
//                 <h3>{todo.name}</h3>
//                 <p>{todo.description}</p>
//                 <h3>{todo.age}</h3>

//                 <button  onClick={() => deleteTodo(todo._id)} className="dButton">Delete</button>
//                 <button onClick={() => editTodo(todo._id)} className="dButton">Edit</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Admin;




// import React, { useState } from 'react';
// import './Admin.css';
// import axios from 'axios';

// const Admin= () => {
//   const [data, setData] = useState([
//     { id: 1, name: 'John', age: 25 },
//     { id: 2, name: 'Jane', age: 30 },
//     { id: 3, name: 'Bob', age: 35 },
//   ]);
//   const [formData, setFormData] = useState({ id: '', name: '', age: '' });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddRow = () => {
//     setData([...data, formData]);
//     setFormData({ id: '', name: '', age: '' });
//   };

//   const handleDeleteRow = (id) => {
//     const updatedData = data.filter((item) => item.id !== id);
//     setData(updatedData);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.age}</td>
//               <td>
//                 <button onClick={() => handleDeleteRow(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3>Add New Row</h3>
//       <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleInputChange} />
//       <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
//       <input type="text" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} />
//       <button onClick={handleAddRow}>Add</button>
//     </div>
//   );
// };

// export default Admin;
