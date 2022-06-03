
import { BrowserRouter, Route, Routes } from "react-router-dom";


import UserData from "./component/PropertyPage";
import Basic from "./component/forms/basicinfo/Basic";
import Property from "./component/forms/propertydetails/Property";

import Signin from "./component/SignIn";
import Signup from "./component/SignUp";
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    UserID:"NA",
    UserName:"   NA"
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Signin setUser = {setUser} />} />
        {/* login page */}
        <Route path="/SignUp" element={<Signup />} />
        {/* registration page */}
        <Route path="/property" element={<Property user={user}/>} /> 
        {/* property page */}
        <Route path="/BasicInfo" element={<Basic />} />
      </Routes>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
