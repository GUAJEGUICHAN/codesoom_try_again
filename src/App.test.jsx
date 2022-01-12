import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [{
        id: 1, name: '서울',
      }],
      categories: [],
      restaurants: [],
    }));
  });
  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('Home');
      expect(container).toHaveTextContent('About');
      expect(container).toHaveTextContent('Restaurants');
    });
  });
  context('with path /about', () => {
    it('renders AboutPage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('About');
    });
  });
  context('with path /restaurants', () => {
    it('renders RestaurantsPage', () => {
      const { getByRole } = render((
        <MemoryRouter initialEntries={['/restaurants']}>
          <App />
        </MemoryRouter>
      ));
      expect(getByRole('button', { name: '서울' }));
    });
  });
  context('with wrong path', () => {
    it('renders NotFoundPage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/wrong']}>
          <App />
        </MemoryRouter>
      ));
      expect(container).toHaveTextContent('404');
    });
  });
});
