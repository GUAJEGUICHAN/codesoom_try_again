export default function LoginForm({
  accessToken,
  onChange,
  onSubmit,
}) {
  function handleChange({ target }) {
    const { name, value } = target;
    onChange({ name, value });
  }

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
          onChange={handleChange}
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
          onChange={handleChange}
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
