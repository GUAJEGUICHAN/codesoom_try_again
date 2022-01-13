export function saveItem(key, value) {
  localStorage.setItem(key, value);
}

export function loadItem(key) {
  const value = localStorage.getItem(key);
  return value;
}
