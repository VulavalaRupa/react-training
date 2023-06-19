import './App.css';
import Header from './Components/Header';
import { UserContextProvider } from './Context/userContext';
import LoginForm from "./Components/Login/LoginForm";
import Home from "./Components/Home";
import SignUpForm from './Components/Login/SignupForm'
import { Routes, Route } from 'react-router-dom'
import ContactManager from './Components/ContactManager/ContactManager';
import MovieDetail from './Components/MovieManager/MovieDetail/MovieDetail';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/*" element={<ContactManager />}></Route>
          <Route path="/signup" element={<SignUpForm />}></Route>
          {/* <Route path="/movie/:imdbID" element={<MovieDetail />}></Route> */}
        </Routes>
      </UserContextProvider>

    </div>

  )
}

export default App;
