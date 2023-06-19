import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import { useContactContext } from "../../Context/contactContext";
import api from "../../API/axios";

const ContactCard = (props) => {
  const {delContacts, editContacts} = useContactContext()
  const navigate = useNavigate()

  const delContact =  async (id) =>{
    await api.delete(`/contacts/${id}`)
    delContacts(id);
  }

  const editContact = async (data) => {
    navigate("/home/editcontact/", {
      state: {
        contact: {
          id: data.id,
          name: data.name,
          email: data.email,
        },
      },
    });
  }
  
  return (
    <div className="card mt-3 p-3">
      <div className="row">
        <div className="col-xl-1 col-lg-1 col-md-2">
        <i className="fa fa-user"></i>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <h4>{props.contact.name}</h4>
          <h5>{props.contact.email}</h5>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-4">
      <i className="fa fa-trash" onClick={()=>{delContact(props.contact.id)}}></i>
      <i className="fa fa-edit" onClick={()=>{editContact(props.contact.id)}}></i>
      </div>
      </div>
      
    </div>
  );
};

export default ContactCard;