import { createContext,useContext,useState } from "react";
import axios from 'axios';

export const contactContext = createContext({
    contacts:null,
    addContacts : () => {},
    delContacts : ()=>{},
    editContacts:()=>{}
})

export function ContactContextProvider({children}){
    const [contacts,setContacts] = useState([])

    const addContacts=(contact)=>{
        setContacts([{...contacts,contact}])
    }

    const delContacts = (id)=>{
        const newContactsList = contacts.filter((contact)=>{
            return contact.id != id
        })
        setContacts(newContactsList)
    }
    const editContacts = (contact)=>{
        const response = axios.put(`/contacts/${contact.id}`, contact);
        const { id } = response.data;
        setContacts(
          contacts.map((contact) => {
            return contact.id === id ? { ...response.data } : contact;
          })
        );
    }

    return (
        <contactContext.Provider value={{contacts,setContacts,addContacts,delContacts,editContacts}}>
            {children}
        </contactContext.Provider>
    )
}

export function useContactContext(){
    const {contacts,setContacts, addContacts,delContacts,editContacts} = useContext(contactContext)
    return {contacts,setContacts, addContacts,delContacts,editContacts}
}