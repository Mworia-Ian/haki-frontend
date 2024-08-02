import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGavel, faUser, faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../css/Lawyers.css'; // Ensure this CSS file is created and properly linked

const LawyersNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar bg-light ${isCollapsed ? 'collapsed' : ''}`}>
      <button
        className="sidebar-toggle"
        onClick={handleToggle}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Nav className="flex-column p-3 flex-grow-1">
        <Nav.Link as={Link} to="/home">
          <FontAwesomeIcon icon={faHome} className="fa-icon" />
          {!isCollapsed && 'Home'}
        </Nav.Link>
        <Nav.Link as={Link} to="/lawyers">
          <FontAwesomeIcon icon={faGavel} className="fa-icon" />
          {!isCollapsed && 'Lawyers'}
        </Nav.Link>
        <Nav.Link as={Link} to="/profile">
          <FontAwesomeIcon icon={faUser} className="fa-icon" />
          {!isCollapsed && 'Profile'}
        </Nav.Link>
      </Nav>
      <Nav className="flex-column p-3 mt-auto">
        <Nav.Link as={Link} to="/logout">
          <FontAwesomeIcon icon={faSignOutAlt} className="fa-icon" />
          {!isCollapsed && 'Logout'}
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default LawyersNavbar;
