import React,{useContext} from 'react';
import {UserData} from '../App';
import {Link} from 'react-router-dom';

const Login = () => {
  const formik = useContext(UserData)
 
      return (
    <div className="login" >
<h1>Login</h1>
    <form  onSubmit={formik.handleSubmit}>
    <input type="text" id="username" name="username" placeholder="Username" value={formik.values.username} onChange={formik.handleChange} />
    {formik.touched.username && formik.errors.username?<div>{formik.errors.username}</div>:null}
    
        <input type="password" id="password" name="password" placeholder="Password"  value={formik.values.password} onChange={formik.handleChange} />
        {formik.touched.password && formik.errors.password?<div>{formik.errors.password}</div>:null}
        
        <button type="submit"  onClick={formik.handleSubmit} className="btn btn-primary btn-block btn-large"><Link to="/menu">Let me in.</Link></button>
        
    </form>
</div>
    

  )
}

export default Login;