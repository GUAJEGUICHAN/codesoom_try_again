import { useDispatch, useSelector } from 'react-redux';
import { changeLoginField, logout, requestLogin } from './actions';
import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { accessToken } = useSelector((state) => ({
    accessToken: state.accessToken,
  }));

  function handleChange({ name, value }) {
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleClickLogout() {
    dispatch(logout());
  }

  return (
    <>
      {
        accessToken
          ? <LogoutForm onClick={handleClickLogout} />
          : (
            <>
              <LoginForm
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </>
          )
      }
      <p>{accessToken}</p>

    </>
  );
}
