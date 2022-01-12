export default function MenuItems({ menuItems }) {
  // console.log(menuItems)
  if (menuItems === undefined) {
    return (
      <div>메뉴가 없습니다!</div>);
  }
  if (!menuItems.length) {
    return (
      <div>메뉴가 없습니다!</div>
    );
  }
  return (
    <ul>
      {menuItems.map((item) => (<li key={item.id}>{item.name}</li>))}
    </ul>
  );
}
