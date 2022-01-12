import { render } from '@testing-library/react';
import MenuItems from './MenuItems';

describe('MenuItems', () => {
  const renderMenuItems = (menuItems) => render((<MenuItems menuItems={menuItems} />));

  context('with MenuItems', () => {
    it('renders MuenItems', () => {
      const { container } = renderMenuItems(
        [
          {
            id: 1,
            restaurantId: 1,
            name: '비빔밥',
          }],
      );
      expect(container).toHaveTextContent('비빔밥');
    });
  });

  context('with no MenuItems', () => {
    it('renders 메뉴가 없습니다.', () => {
      const { container } = renderMenuItems([]);
      expect(container).toHaveTextContent('메뉴가 없습니다!');
    });
  });

  context('with undefined MenuItems', () => {
    it('renders 메뉴가 없습니다. ', () => {
      const { container } = renderMenuItems(undefined);
      expect(container).toHaveTextContent('메뉴가 없습니다!');
    });
  });
});
