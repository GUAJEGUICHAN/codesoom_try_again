export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}
export function isEmptyObject(obj) {
  return Object.values(obj).length === 0;
}
