import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const userContext = createContext({
    user: null,
    logIn: () => { },
    logOut: () => { },
    addUserData: () => { }
})
const intitalValue = { name: "Guest", isUserLoggedIn: false }

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(intitalValue)
    const [existingUserData, setExistingUserData] = useState([{ username: "rupa", password: "rupa" }])
    const navigate = useNavigate();

    const logIn = (data) => {
        if (existingUserData.some(user => user.username === data.username && user.password === data.password)) {
            setUser({ name: data.username, isUserLoggedIn: true })
        }
        else {
            alert('Please sign up')
        }
    }
    const logOut = () => {
        setUser(intitalValue)
        navigate("/")
    }
    const addUserData = (data) => {
        setExistingUserData([...existingUserData, { username: data.username, password: data.password }])
    }
    return (
        <userContext.Provider value={{ user, logIn, logOut, addUserData }}>
            {children}
        </ userContext.Provider>
    )
}

export function useUserContext() {
    const { user, logIn, logOut, addUserData } = useContext(userContext)
    return { user, logIn, logOut, addUserData }
}