
import React,{useContext} from 'react'
import {UserName} from '../App';
const Menu = () => {
  const uname = useContext(UserName);
  return (<div>
    <h3>{uname}  is Login</h3>
    </div>
  )
}

export default Menu;