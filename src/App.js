import React from 'react'
import Quiz from './components/quiz'
import { Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/SignUp';
import Nav from './components/Nav';
import Home from './components/Home';



const App = () => {
  const isLoggidIn = !!localStorage.getItem("token");
  console.log(isLoggidIn);
  return (
    <div>
      {isLoggidIn&& (<Nav/>)}
      <Switch>
      <Route path ="/" exact>
         <Home/>
         </Route>
         <Route path ="/quiz">
         {isLoggidIn&&(<Quiz/>)}
         {!isLoggidIn&&(<Login/>)}

         </Route>
         <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  )
}

export default App