import { useForm } from "react-hook-form";
import { useNavigate ,useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../API/axios";
// import {useSelector , useDispatch} from 'react-redux';
// import {setSelectedContacts,getSelectedContact} from  "../../Redux/ContactsRedux/ContactsSlice"

function EditContact(){
    const { register,formState: { errors }, handleSubmit,setValue } = useForm();
    const [editableContact,setEditableContact] = useState([{id:"",name:"",email:""}]);
    

    // const selectedContact = useSelector(getSelectedContact)
    // const dispatch = useDispatch()

    const navigate = useNavigate();
    const {id} = useParams()
  
    const getContactsApi = async () =>{
      debugger
      const response = await axios.get(`/Contacts/${id}`);
      // dispatch(setSelectedContacts(response.data))
      console.log("Get Contacts", response.data)
      setEditableContact(response.data);
    }
     

    useEffect(()=>{
      getContactsApi()
    },[])

    // useEffect(()=>{
    //   if (editableContact) {
    //     setValue( "name", editableContact.name )
    //     setValue( "email",editableContact.email )
        
    //   }
    // },[editableContact])
    
   
    const onSubmit =  async (data) =>{
      const response = await axios.put(`/Contacts/${id}`,{"id":id,...data});
      navigate("/home/contactlist")
    }

    return(
        <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
           <h1>Edit Contact</h1>
            <div className="ui divider"></div>
            <div className="ui form">
            <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register('name', { required: true })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="errorMsg">Name is required.</p>)}
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register('email', { required: true })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="errorMsg">Email is required.</p>)}
          </div>
          
          <button className="fluid ui button blue">Edit</button>
        </div>
      </form>
    </div>
    )
}
export default EditContact