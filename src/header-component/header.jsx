import{ useEffect, useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Companies from '../pages/Companies';
import Candidates from '../pages/Candidates';
import Assessment from '../pages/Assessment';
import PostAJob from '../pages/Post';
import Career from '../pages/Career';
import image from './figma-logo.png';
import NotFound from '../pages/NotFound';

function NavBar() {
  const [showContent, setShowContent] = useState(false);

  // Check localStorage for flag only when the component mounts
  useEffect(() => {
    const isClicked = localStorage.getItem('linkClicked');
    // Only show content if flag is set
    if (isClicked) {
      setShowContent(true);
    }
  }, []);

  // Handle the link click to set flag and show content
  const handleLinkClick = () => {
    localStorage.setItem('linkClicked', 'true');
    setShowContent(true);
  };

  return (
    <div className="header-container">
      <header className="header">
        {/* Logo Section */}
        <div className="logo-container">
          <Link to="/companies">
            <img className='logo' src={image} alt="Logo" /> {/* Replace with your logo */}
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <ul>
            <li>
              <Link 
                to="/companies" 
                className='no-underline' 
                onClick={handleLinkClick}>
                Companies
              </Link>
            </li>

            <li>
              <Link 
                to="/candidates" 
                className='no-underline' 
                onClick={handleLinkClick}>
                Candidates
              </Link>
            </li>

            <li>
              <Link 
                to="/assessment" 
                className='no-underline' 
                onClick={handleLinkClick}>
                Assessment
              </Link>
            </li>

            <li>
              <Link 
                to="/post a job" 
                className='no-underline' 
                onClick={handleLinkClick}>
                Post a job
              </Link>
            </li>

            <li>
              <Link 
                to="/career" 
                className='no-underline' 
                onClick={handleLinkClick}
                target='_blank'>
                Career
              </Link>
            </li>
          </ul>
          
          {/* Conditionally render the Routes based on the state */}
          {showContent && (
            <Routes className = 'route-path'>
              <Route path='/companies' element={<Companies />} />
              <Route path='/candidates' element={<Candidates />} />
              <Route path='/assessment' element={<Assessment />} />
              <Route path='/post a job' element={<PostAJob />} />
              <Route path='/career' element={<Career />} />
              <Route path='/companies' element={<NotFound />} />
            </Routes>
          )}
        </nav>

        {/* Buttons Section */}
        <div className="auth-buttons">
          <p>
            <Link to="/signup" className="btn-signup">
              Sign Up
            </Link>
          </p>
          <p>
            <Link to="/login" className="btn-login">
              Log In
            </Link>
          </p>
          
        </div>
      </header>
    </div>
  );
}

export default NavBar;
