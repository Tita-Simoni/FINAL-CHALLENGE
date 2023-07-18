import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/Login/SingIn';
import SignUp from './pages/Login/SignUp';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/Search/SearchPage';
import ExplorePage from './pages/ExploreProduct/ExplorePage';


import './inex.css';


export default function App () {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/home" element={<HomePage />} />   
            <Route path="/searchPage" element={<SearchPage />} />
            <Route path="/explorePage" element={<ExplorePage />} />            
        </Routes>
    </BrowserRouter>  
  );
}

