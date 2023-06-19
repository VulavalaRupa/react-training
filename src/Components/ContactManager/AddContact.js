import { useForm } from "react-hook-form";
import { useContactContext } from "../../Context/contactContext";
import { useNavigate } from "react-router-dom";
import api from "../../API/axios";

function AddContact(){
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {contacts,addContacts} = useContactContext();
    const navigate = useNavigate();
   
    const onSubmit = async (data) =>{

        const request={
          id:Math.ceil(Math.random()*1000),
          ...data
        }
        const response = await api.post("/contacts",request);
         addContacts(response.data)
         navigate("/home/contactlist")
    }

    return(
        <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card mx-auto mt-5 p-4" style={{ width: '25rem' }}>
           <h1>Add Contact</h1>
            <div>
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
          <div>
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
          <div>
          <button className="btn btn-primary">Add</button>
          </div>
          </div>
      </form>
    </div>
    )
}
export default AddContact