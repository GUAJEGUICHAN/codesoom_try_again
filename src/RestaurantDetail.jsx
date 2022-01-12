import MenuItems from './MenuItems';

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;
  return (
    <>
      <h2>{name}</h2>
      <h3>
        <span>주소</span>
        <span>:</span>
        <span>{address}</span>
      </h3>
      <h2>메뉴</h2>
      <MenuItems menuItems={menuItems} />
    </>
  );
}
