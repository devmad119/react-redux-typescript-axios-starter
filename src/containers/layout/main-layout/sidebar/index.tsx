import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
import { toast } from 'react-toastify';
import { Logo, LogoTitle } from './styled';
import logoImg from 'assets/icons/logo.png';
import sidebarBackground from 'assets/images/sidebar-background.jpg';
import AuthApiService from 'common/services/auth-api-service';
import useAppDispatch from 'hooks/use-app-dispatch';
import useAppSelector from 'hooks/use-app-seletecor';
import { setCurrentUser } from 'features/auth-slice';
import authApi from 'common/api/auth';
import { setSelectedIndex, selectIndex } from 'features/menu-slice';

const Sidebar: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const authApiService = new AuthApiService();

  const [menuCollapse, setMenuCollapse] = useState<boolean>(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const selectedIndex = useAppSelector(selectIndex);

  const handleClick = async () => {
    try {
      const res = await authApiService.signOut();
      if (res.data) {
        authApi.logout();
        dispatch(setCurrentUser({}));
        toast.success(res.data.message);
        history.push('/signin');
      }
    } catch (error) {
      toast.error(error as string);
    }
  };

  useEffect(() => {
    switch (selectedIndex) {
      case 0:
        history.push('/quick-sms');
        break;
      case 1:
        history.push('/sendout-status');
        break;
      case 2:
        history.push('/sendout-history');
        break;
      case 3:
        history.push('/statistics');
        break;
      case 4:
        history.push('/add-funds');
        break;
      case 5:
        history.push('/deposit-history');
        break;
      case 6:
        history.push('/settings');
        break;
      default:
        history.push('/quick-sms');
        break;
    }
  }, [selectedIndex]);

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
                <SubMenu defaultOpen title="Message Service" icon={<FiMail />}>
                  <MenuItem active={selectedIndex === 0} icon={<FiMessageSquare />}>
                    Quick SMS
                    <Link to="/quick-sms" onClick={() => dispatch(setSelectedIndex(0))} />
                  </MenuItem>
                  <MenuItem active={selectedIndex === 1} icon={<FiSend />}>
                    Sendout Status
                    <Link to="/sendout-status" onClick={() => dispatch(setSelectedIndex(1))} />
                  </MenuItem>
                  <MenuItem active={selectedIndex === 2} icon={<FiSend />}>
                    Sendout History
                    <Link to="/sendout-history" onClick={() => dispatch(setSelectedIndex(2))} />
                  </MenuItem>
                  <MenuItem active={selectedIndex === 3} icon={<FiBarChart />}>
                    Statistics
                    <Link to="/statistics" onClick={() => dispatch(setSelectedIndex(3))} />
                  </MenuItem>
                </SubMenu>
                <SubMenu defaultOpen title="Wallet" icon={<FiPocket />}>
                  <MenuItem active={selectedIndex === 4} icon={<FiPlusCircle />}>
                    Add funds
                    <Link to="/add-funds" onClick={() => dispatch(setSelectedIndex(4))} />
                  </MenuItem>
                  <MenuItem active={selectedIndex === 5} icon={<FiGift />}>
                    Deposit History
                    <Link to="/deposit-history" onClick={() => dispatch(setSelectedIndex(5))} />
                  </MenuItem>
                </SubMenu>
                <SubMenu defaultOpen title="Account" icon={<FiUsers />}>
                  <MenuItem active={selectedIndex === 6} icon={<FiSettings />}>
                    Settings
                    <Link to="/settings" onClick={() => dispatch(setSelectedIndex(6))} />
                  </MenuItem>
                </SubMenu>
              </Menu>
            </PerfectScrollbar>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={handleClick}>
                Sign Out
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
