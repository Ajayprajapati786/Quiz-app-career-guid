import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Nav = () => {
    const history = useHistory();

    const handleLogout=()=>{
        localStorage.removeItem("token");
        history.push("/");
        window.location.reload();

    }
  return (
    <div style={{position:"fixed", top:"0px", right:"0px"}}>
        <button  className='btn btn-danger' onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Nav