import { useUserContext } from "../Context/userContext";
import './Header.scss';

function Header() {
    const { user, logOut } = useUserContext()
    return (
        <div className="header">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <h2 className="logo">React Tutorial</h2>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 ">
                    <h3 className="logo">Welcome, {user.name}</h3>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3">
                    {user.isUserLoggedIn ?  <button className="btn btn-primary" onClick={logOut}>Logout</button> : ""}
                </div>
                </div>
    );

}
export default Header