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
        <div className=" p-5">
         <div className="card p-5 "> 
         <span>
        <b>Contact List</b> 
        <Link to="/home/addcontact">
         <button  className="btn btn-primary" style={{"float":"right"}}> Add Contact</button>
        </Link>
          </span>
        <div>{renderContactCards}</div>
            </div>
        </div>
       
        
    )
}
export default ContactList