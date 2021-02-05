import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import history from '../history';

const Header = () => {
  const [activeItem, setActiveItem] = useState(history.location.pathname);
  const navigation = [
    {
      path: '/',
      name: 'CVs'
    },
    {
      path: '/user/create',
      name: 'Create User'
    }
  ];

  const handleClick = (e, {name}) => {
    setActiveItem(name)
  };

  const renderNavigationItem = ({path, name}) => {
    return (
      <Menu.Item
        key={path}
        name={path}
        active={activeItem === path}
        onClick={handleClick}
        as={Link}
        to={path}
      >
        {name}
      </Menu.Item>
    );
  }

  return (
    <Menu>
      {navigation.map(ni => renderNavigationItem(ni))}
    </Menu>
  );
};

export default Header;