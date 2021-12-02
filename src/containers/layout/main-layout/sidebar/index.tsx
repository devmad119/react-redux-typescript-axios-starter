import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ProSidebar, Menu, SubMenu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import {
  FiLogOut,
  FiArrowLeftCircle,
  FiMessageSquare,
  FiArrowRightCircle,
  FiMail,
  FiBarChart,
  FiPocket,
  FiUsers,
  FiSettings,
  FiSend,
  FiPlusCircle,
  FiGift,
} from 'react-icons/fi';
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
            <PerfectScrollbar>
              <Menu iconShape="circle">
                <SubMenu title="Message Service" icon={<FiMail />}>
                  <MenuItem icon={<FiMessageSquare />}>Quick SMS</MenuItem>
                  <MenuItem icon={<FiSend />}>Sendout Status</MenuItem>
                  <MenuItem icon={<FiSend />}>Sendout History</MenuItem>
                  <MenuItem icon={<FiBarChart />}>Statistics</MenuItem>
                </SubMenu>
                <SubMenu title="Wallet" icon={<FiPocket />}>
                  <MenuItem icon={<FiPlusCircle />}>Add funds</MenuItem>
                  <MenuItem icon={<FiGift />}>Deposit History</MenuItem>
                </SubMenu>
                <SubMenu title="Account" icon={<FiUsers />}>
                  <MenuItem icon={<FiSettings />}>Settings</MenuItem>
                </SubMenu>
              </Menu>
            </PerfectScrollbar>
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
