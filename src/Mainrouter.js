import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './LOGIN/RegistrationForm';
import LoginForm from './LOGIN/Login';
import Navigationbar from './Navigationbar';
import Admin from './Admin/Admin';
import Neuro from "./Department/Neuro";
import Cardio from './Department/Cardio';
import General from './Department/General';
import Ortho from './Department/Ortho';
import Deps from './Departmenthead/Deps';
import LogoutButton from './Logout';

const Mainrouter = () => {
  return (
        <div>
       
    <Routes>
      
        <Route path="/" element={<RegistrationForm/>} />
        <Route path="/Login" element={<LoginForm />} /> 
        <Route path="/Navigationbar" element={<Navigationbar />} />
        



            <Route path="/Admin" element={<Admin/>} />

            <Route path="/Neuro" element={<Neuro/>} />
            <Route path="/Ortho" element={<Ortho/>} />
            <Route path="/General" element={<General/>} />
            <Route path="/Cardio" element={<Cardio/>} />
            
            <Route path="/Deps" element={<Deps/>} />
            <Route path="/Logout" element={<LogoutButton/>} />





            




      
    

      
    </Routes>
    </div>
  );
};

export default Mainrouter;




// / import React from "react";
// import Login from "./Admin/Login";
// import { Routes,Route,Link} from 'react-router-dom';




// const Mainrouter = () => {
   
//     return (
//         <div >
//           <nav>
//           <ul>
//               <li>
                //   <Link to="/Login"><button type="submit">admin</button></Link>
//               </li>
//           </ul>
//           <ul>
//               <li>
//                   <Link to="/Deps"><button type="submit">DEPARTMENTS</button></Link>
//               </li>
//           </ul>
//           </nav>
        //   <Routes>
        //     <Route path="/Login" element={<Login/>} />
        //     <Route path="/" element={<departments/>} />

        //     </Routes>
//       </div>
    
      
//     )
//     }

    
        
  
//   export default Mainrouter;




  