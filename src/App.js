import React from 'react';
import Menu from './component/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import { createContext } from 'react';
import './App.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const UserData = createContext();
const UserName = createContext();
const App = () => {

     
const validationschema = Yup.object({
  username: Yup.string("Enter UserName")
  .required("UserName is required")
  .min(6,"username is greater to six")
  ,
  password: Yup.string("Enter Password")
  .min(8,"Password atleast 8 characters")
  .required("Password is required"),
});
const formik = useFormik({
  initialValues:{
    username:"",
    password:"",
  },
  validationSchema : validationschema,
onSubmit:  values => {
  console.log(JSON.stringify(values,null,2))
},


  });

  return (
    <div>
     
    <UserData.Provider value={formik}>
      <UserName.Provider value={formik.values.username  }>
     
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            
            <Route path='menu' element={<Menu />} />
            
          </Routes>
        </BrowserRouter>
        </UserName.Provider>
      </UserData.Provider>
    </div>
  )
}

export default App;
export { UserData ,UserName};