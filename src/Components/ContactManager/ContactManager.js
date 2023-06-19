import { UserContextProvider } from "../../Context/userContext"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactComponentHeader from './ContactComponentHeader'
import {Routes, Route} from 'react-router-dom'
import { ContactContextProvider } from "../../Context/contactContext"
import Home from '../MovieManager/Home/Home';
import MovieCard from "../MovieManager/MovieCard/MovieCard"
import MovieDetail from "../MovieManager/MovieDetail/MovieDetail"
import CartList from "../MovieManager/MovieCart/CartList"

function ContactManager(){
return(
    <div>
            <ContactContextProvider>
            <ContactComponentHeader/>
            <Routes>
                <Route path='/addContact' element={<AddContact/>}></Route>
                <Route path='/contactList' element={<ContactList/>}></Route>
                <Route path='/movielist' element={<MovieCard/>}></Route>
                <Route path='/moviedetail' element={<MovieDetail/>}></Route>
                <Route path='/cartlist' element={<CartList/>}></Route>
                
            </Routes>
            </ContactContextProvider>
    </div>
)
}
export default ContactManager