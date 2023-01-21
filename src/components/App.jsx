import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout/Layout';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { Contacts } from 'pages/Contacts/Contacts';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Contacts />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}
