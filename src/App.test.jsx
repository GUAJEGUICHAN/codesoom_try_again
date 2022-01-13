import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import given from 'given2';
import App from './App';
import { loadItem } from './services/storage';

jest.mock('react-redux');
jest.mock('./services/storage');

describe('App', () => {
  // 로그인이 됐을때 안됐을떄 처리

  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [{
        id: 1, name: '서울',
      }],
      categories: [],
      restaurants: [],
      accessToken: given.accessToken,
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
  context('with path /login', () => {
    context('when logged out', () => {
      beforeEach(() => {
        loadItem.mockImplementation(() => '');
      });
      it('renders Log In button', () => {
        const { getByRole } = render((
          <MemoryRouter initialEntries={['/login']}>
            <App />
          </MemoryRouter>
        ));
        expect(getByRole('button', { name: 'Log In' }));
      });
    });
    context('when logged in', () => {
      const accessToken = 'ACCESS_TOKEN';
      beforeEach(() => {
        loadItem.mockImplementation(() => accessToken);
      });

      given('accessToken', () => 'TOKEN');
      it('renders Log Out button', () => {
        const { getByText, getByRole } = render((
          <MemoryRouter initialEntries={['/login']}>
            <App />
          </MemoryRouter>
        ));
        expect(getByRole('button', { name: 'Log Out' }));
        expect(getByText(given.accessToken));
      });
    });
  });
});
