import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Style.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password
      });
      setError('');
      console.log(response.data);
      // Reset form fields
      setUsername('');
      setPassword('');

      // Navigate to the main app
      navigate('/Navigationbar');
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;



// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [token, setToken] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/login', {
//         username,
//         password
//       });
//       setError('');
//       setToken(response.data.token);
//       // Reset form fields
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       setError(error.response.data.error);
//     }
//   };

//   const handleProfile = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/profile', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setError('');
//       console.log(response.data);
//     } catch (error) {
//       setError(error.response.data.error);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>

//       <h1>Profile</h1>
//       {token ? (
//         <div>
//           <button onClick={handleProfile}>Get Profile</button>
//         </div>
//       ) : (
//         <p>Please log in to view the profile</p>
//       )}

//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Login;
















// import React, { useState } from 'react';
// import axios from 'axios';
// import RegisterForm from './LOGIN/RegistrationForm';
// import {  Router, Switch, Route } from 'react-router-dom';



// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8000/login', {
//         email,
//         password,
//       });

//       // Handle successful login
//       console.log('Login successful:', response.data);
//       // You can redirect the user to another page or perform additional actions here
//     } catch (error) {
//       // Handle login error
//       console.error('Login error:', error.response.data.message);
//       setError(error.response.data.message);
//     }
//   };
  
//   return (
    
    
//     <div>
//       <h2>Login</h2>
//         <Router>
//       <Switch>
//         <Route path="http://localhost:8000/register" component={RegisterForm} />
//         {/* Add other routes if needed */}
//       </Switch>
//     </Router>
//        {error && <p>{error}</p>}
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         /> 
//         <button type="submit">Login</button>
//       </form>
//     </div> 
//   );
// }

// export default Login;






// import React, { useState } from "react";
// import "./Style.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleInputChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post("http://localhost:6000/signin", {
//         email: formData.email,
//         password: formData.password,
//       })
//       .then((response) => {
//         console.log(response.data);
        
//         // Do something with the successful response data, like storing the token in localStorage and redirecting to a new page
      //   localStorage.setItem("token", response.data.token);
      //   navigate("/Profile");
      // })
//       .catch((error) => {
//         console.log(error.response);
//         setError("Invalid email or password");
//       });
//   };

  // const navigate = useNavigate();

//   return (
//     <div className="container">
//       <h2 className="heading">Login</h2>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//         <button
//           className="cancelbtn"
//           onClick={() => navigate("/Registration")}
//         >
//           Register
//         </button>
//       </form>
//       {error && <div className="error">{error}</div>}
//     </div>
//   );
// }

// export default LoginForm;





// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './Style.css';

// // function SignupForm({ onSignup }) {

// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post('http://localhost:6000/signup', {
// //         name,
// //         email,
// //         password 
// //       }).then(({data})=>{
// //         console.log(data);
// //         if (data.success){
// //           alert("User created successfully");
// //           window.location.href="/login";
// //         }
// //       })
// //       // Call the onSignup function with the response data
// //       onSignup(response.data);
// //       setName('');
// //       setEmail('');
// //       setPassword('');
// //     } catch (error) {
// //       console.error('Signup error:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h3>Sign Up</h3>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           placeholder="Name"
// //         />
// //         <input
// //           type="text"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           placeholder="Email"
// //         />
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           placeholder="Password"
// //         />
// //         <button type="submit">Sign Up</button>
// //       </form>
// //     </div>
// //   );
// // }

// // function SigninForm({ onSignin }) {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSignin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:6000/signin', {
// //         email,
// //         password,
// //       });
// //       // Call the onSignin function with the response data
// //       onSignin(response.data);
// //       setEmail('');
// //       setPassword('');
// //     } 
// //       // localStorage.setItem("token",response.data.token);

// //     catch (error) {
// //       console.error('Signin error:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h3>Sign In</h3>
// //       <form onSubmit={handleSignin}>
// //         <input
// //           type="text"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           placeholder="Email"
// //         />
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           placeholder="Password"
// //         />
// //         <button type="submit">Sign In</button>
// //       </form>
// //     </div>
// //   );
// // }

// // function SignupSigninPage() {
// //   const handleSubmit = (signupData) => {
// //     // Handle signup data
// //     // ...
// //     console.log('Signup:', signupData);
// //   };

// //   const handleSignin = (signinData) => {
// //     // Handle signin data
// //     // ...
// //     console.log('Signin:', signinData);
// //   };

// //   return (
// //     <div>
// //       <h2>Signup Signin Form</h2>
// //       <SignupForm onSignup={handleSubmit} />
// //       <SigninForm onSignin={handleSignin} />
// //     </div>
// //   );
// // }

// // export default SignupSigninPage;
