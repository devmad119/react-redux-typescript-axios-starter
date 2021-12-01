import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, Links } from './styled';
import avatarBlank from 'assets/icons/avatar-blank.png';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Links>
        <Link to="/add-funds">Add Funds</Link>
        <Link to="/balance">Balance</Link>
        <Link to="/balance">
          <img alt="default avatar" src={avatarBlank} width={40} height={40} />
        </Link>
      </Links>
    </StyledHeader>
  );
};

export default Header;
