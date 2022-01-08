import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const PrivateRoute = ({ children}) => {
  const { currentUser } = useAuth()


  return currentUser ? children : <Navigate to="/login" />

}

  // return (
  //   <Route
  //     {...rest}
  //     render={props => {
  //       return currentUser ? <Component {...props} /> : <Navigate to="/login" />
  //     }}
  //   ></Route>
  // )


export default PrivateRoute
