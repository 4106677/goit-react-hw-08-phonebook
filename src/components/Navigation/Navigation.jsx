import { useAuth } from 'components/hooks/useAuth';

import { Header, NavItem } from './Navigation.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <NavItem to="/" key="home">
          {isLoggedIn ? 'Contacts' : 'Home'}
        </NavItem>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <ul>
            <li>
              <NavItem to="register" key="register">
                Register
              </NavItem>
            </li>
            <li>
              <NavItem to="login" key="login">
                Log In
              </NavItem>
            </li>
          </ul>
        )}
      </Header>
    </>
  );
};
