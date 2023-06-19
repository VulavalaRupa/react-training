import { Link } from "react-router-dom";
import { useContactContext } from "../../Context/contactContext";
import ContactCard from "./ContactCard";
import { useEffect } from "react";
import axios from "../../API/axios"

function ContactList(){
  const {contacts, setContacts} = useContactContext()

  const getContactsApi = async () =>{
   
    const response = await axios.get("/Contacts");
    console.log("Contacts", response.data)
    setContacts(response.data)

  }
  useEffect(()=>{
  
    getContactsApi()
  },[])

    
    const renderContactCards = 
      contacts?.map(
        (contact)=>{
          console.log(contact)
          return(
          <ContactCard contact={contact} />
          )
        }
      )
    
    return(
        <div className="card mt-5 p-5">
         <div className="row d-flex ">
            <div className="">
         <h3>Contact List</h3>
            </div>
            <div className="d-flex align-content-end">
        <Link to="/home/addcontact">
          <p>Add Contact</p>
        </Link>
        </div>
            </div>
        <div>{renderContactCards}</div>
        </div>
       
        
    )
}
export default ContactList