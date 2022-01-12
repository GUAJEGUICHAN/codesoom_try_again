import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import { useParams } from 'react-router-dom';
import RestaurantPage from './RestaurantPage';

import RESTAURANT from '../fixtures/restaurant';

jest.mock('react-redux');
jest.mock('react-router-dom');

describe('RestaurantPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurant: given.restaurant,
  }));

  function renderRestaurantPage() {
    return render((
      // <RestaurantPage params={{ id: given.id }} />
      <RestaurantPage params={given.params} />
    ));
  }
  context('without params', () => {
    // given('id', () => 1)
    given('restaurant', () => ({}));

    it('renders restaurantPage', () => {
      const { queryByText } = renderRestaurantPage();

      expect(queryByText('양천주가')).toBeNull();
      expect(queryByText('주소')).toBeNull();
    });
  });
  context('with params', () => {
    given('params', () => ({ id: 1 }));
    useParams.mockReturnValue(1);
    given('restaurant', () => RESTAURANT);

    it('renders restaurantPage', () => {
      const { queryByText } = renderRestaurantPage();

      expect(queryByText('양천주가')).not.toBeNull();
      expect(queryByText('주소')).not.toBeNull();
    });
  });
});
