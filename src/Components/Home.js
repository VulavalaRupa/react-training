import React from 'react'
import {Link , useNavigate} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const navigateToContact = () => {
      navigate("/home/contactlist");
    };
  
    const navigateToMovie = () => {
        navigate("/home/movielist");
      };
    return(
        <div className='card p-5 mx-auto mt-5' style={{width: '20rem'}}>
           <button className='btn btn-primary' onClick={navigateToContact}>Contact Manager App</button>
           <hr></hr>
           <button className='btn btn-primary' onClick={navigateToMovie}>Movie Manager App</button>
        </div>
    )
}

export default Home;