import React from 'react';

import { render } from '@testing-library/react';

import given from 'given2';

import { useSelector, useDispatch } from 'react-redux';
import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../fixtures/restaurant';

jest.mock('react-redux');
describe('RestaurantContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  function renderRestaurantContainer() {
    return render((
      <RestaurantContainer restaurantId={given.restaurantId} />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();
    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
    }));
  });
  context('with a wrong restaurantId', () => {
    given('restaurantId', () => -1);
    it('dispatch is not to be called', () => {
      expect(dispatch).not.toBeCalled();
    });
  });
  context('with a restaurant data', () => {
    given('restaurantId', () => 1);

    given('restaurant', () => RESTAURANT);

    it('renders RestaurantDetail', () => {
      const { queryByText } = renderRestaurantContainer();

      expect(queryByText('양천주가')).not.toBeNull();
      expect(queryByText('주소')).not.toBeNull();
      expect(dispatch).toBeCalled();
    });
  });
  context('without any restaurant data', () => {
    given('restaurantId', () => 1);

    given('restaurant', () => ({}));

    it('renders 로딩중', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('로딩중');
      expect(dispatch).toBeCalled();
    });
  });
});
