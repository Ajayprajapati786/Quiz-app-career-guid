import React from 'react'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
        <p>Welcome to quiz website if you are a new user then please <Link to="/signup">Sign up</Link> otherWise please <Link to="/login">Sign In </Link></p>
    </div>
  )
}

export default Home;