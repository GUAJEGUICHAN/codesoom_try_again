import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
  changeLoginField,
  setAccessToken,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: {
        // name: '',
        // address: '',
        // menuItems: [],
      },
      selectedRegion: null,
      selectedCategory: null,
      loginField: {
        email: '',
        password: '',
      },
      accessToken: '',

    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: [
          { id: 1, name: '한식' },
        ],
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });
  describe('changeLoginField', () => {
    context('when email is changed', () => {
      it('changes email', () => {
        const initialState = {
          loginField: {
            email: '',
            password: '',
          },
        };

        const state = reducer(initialState, changeLoginField({ name: 'email', value: 'test@example.com' }));

        expect(state.loginField).toEqual({
          ...initialState.loginField,
          email: 'test@example.com',
        });
      });
    });
    context('when password is changed', () => {
      it('changes password', () => {
        const initialState = {
          loginField: {
            email: '',
            password: '',
          },
        };

        const state = reducer(initialState, changeLoginField({ name: 'password', value: 'password' }));

        expect(state.loginField).toEqual({
          ...initialState.loginField,
          password: 'password',
        });
      });
    });
  });

  describe('setAccessToken', () => {
    const initialState = {
      accessToken: '',
    };
    const state = reducer(initialState, setAccessToken('TOKEN'));
    expect(state.accessToken).toEqual('TOKEN');
  });
});
