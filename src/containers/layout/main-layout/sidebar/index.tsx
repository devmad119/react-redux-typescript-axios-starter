import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaList, FaRegHeart } from 'react-icons/fa';
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { RiPencilLine } from 'react-icons/ri';
import { BiCog } from 'react-icons/bi';
import { Logo, LogoTitle } from './styled';
import logoImg from 'assets/icons/logo.png';
import sidebarBackground from 'assets/images/sidebar-background.jpg';

const Sidebar: React.FC = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="sidebar">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse} image={sidebarBackground}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
            <Link to="/">
              <Logo>
                <img src={logoImg} width={40} height={40} alt="logo" />
                {!menuCollapse && <LogoTitle>Supremacy</LogoTitle>}
              </Logo>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Dashboard
              </MenuItem>
              <MenuItem icon={<FaList />}>Category</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
