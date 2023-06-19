import { Navigate } from "react-router-dom"
import { useUserContext } from "../Context/userContext";

function ProtectedRoute({children}){
    const {user} = useUserContext()
    if(!user.isUserLoggedIn){
        return  <Navigate to="/"></Navigate>
    }
    return children
}

export default ProtectedRoute

