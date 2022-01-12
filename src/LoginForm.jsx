export default function LoginForm({
  loginField,
  accessToken,
  onChange,
  onSubmit,
}) {
  const { email, password } = loginField;
  return (
    <>
      <div>
        <label htmlFor="login-email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="login-email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="login-password"
          value={password}
          onChange={onChange}
        />
      </div>
      <button type="button" onClick={onSubmit}>Log In</button>
      <div>
        <span>토큰키:</span>
        <span>{accessToken}</span>
      </div>
    </>
  );
}
