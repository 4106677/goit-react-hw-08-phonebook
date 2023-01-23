import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'Redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logout());

  return (
    <div>
      <p>{user.email}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
