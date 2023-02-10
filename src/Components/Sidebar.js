import React ,{useState}from "react";
import {
  FcAreaChart,
  FcAssistant,
  FcAcceptDatabase,
  FcAdvance,
  FcAutomotive,
} from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import "./Sidebar.css"

const Sidebar = ({ children }) => {
  //console.log(children)
  const [isOpen, setIsOpen]= useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FcAcceptDatabase />,
    },
    {
      path: "/flights",
      name: "Flights",
      icon: <FcAdvance />,
    },
    {
      path: "/satitics",
      name: "Statistic",
      icon: <FcAreaChart />,
    },
    {
      path: "/tours",
      name: "Tours",
      icon: <FcAutomotive />,
    },
    {
      path: "/assistant",
      name: "Assistant",
      icon: <FcAssistant />,
    },
  ];
  return (
    <div>
      <Container fluid>
  
       <div style={{width : isOpen ? "200px" :"50px"}}className="sidebar" >
          <div className="top-section">
            <h1 style={{display : isOpen ? "block" :"none"}} className="Logo">Logo</h1>
            <div style={{marginLeft : isOpen ? "50px" :"0px"}} className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* map for menus links */}
          <Nav className="flex-column">
            {menuItem.map((item, i) => {
              return (
                <NavLink
                  to={item.path}
                  key={i}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{item.icon}</div>
                  <div style={{display : isOpen ? "block" :"none"}}  className="link-text">{item.name}</div>
                </NavLink>
              );
            })}
          </Nav>
        </div>
      <main>{children}</main>
 
        
        
        </Container>
     
    </div>
  );
};

export default Sidebar;
