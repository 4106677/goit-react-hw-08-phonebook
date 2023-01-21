import { Header, NavItem } from './Navigation.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'register', text: 'Register' },
  { href: 'login', text: 'Log In' },
];

export const Navigation = () => {
  return (
    <>
      <Header>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Header>
    </>
  );
};
