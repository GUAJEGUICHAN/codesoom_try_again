import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import RESTAURANT from '../fixtures/restaurant';

jest.mock('react-redux');
describe('RestaurantDetail', () => {
  function renderRestaurantDetail() {
    return render((
      <RestaurantDetail restaurant={RESTAURANT} />
    ));
  }

  it('renders region and categories select buttons', () => {
    const { queryByText } = renderRestaurantDetail();

    expect(queryByText('양천주가')).not.toBeNull();
    expect(queryByText('주소')).not.toBeNull();
  });
});
