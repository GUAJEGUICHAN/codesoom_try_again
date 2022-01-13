export default function TextField({
  label, name, type = 'text', onChange,
}) {
  const id = `review-${name}`;
  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} onChange={handleChange} />
    </>
  );
}
