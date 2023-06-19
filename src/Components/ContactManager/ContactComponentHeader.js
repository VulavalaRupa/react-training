import { useLocation } from "react-router-dom";

function ContactComponentHeader(){
    const location = useLocation();

    const { pathname } = location;
return(
    <div>
       {pathname === '/home/contactlist' ? <h3>Contact Manager</h3> : <h3>Movie Application</h3>} 
        
    </div>
)
}
export default ContactComponentHeader