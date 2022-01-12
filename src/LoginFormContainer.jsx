import { useDispatch, useSelector } from 'react-redux';
import { changeLoginField, requestLogin } from './actions';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { loginField, accessToken } = useSelector((state) => ({
    loginField: state.loginField,
    accessToken: state.accessToken,
  }));

  function handleChange({ target }) {
    const { name, value } = target;
    dispatch(changeLoginField({ name, value }));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      loginField={loginField}
      accessToken={accessToken}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
