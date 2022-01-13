import { equal } from './utils';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: {
  },
  selectedRegion: null,
  selectedCategory: null,
  loginField: {
    email: '',
    password: '',
  },
  accessToken: '',
  reviewField: {
    score: undefined,
    description: '',
  },
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },
  setRestaurant(state, { payload: { restaurant } }) {
    return {
      ...state,
      restaurant,
    };
  },

  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },

  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },
  changeLoginField(state, { payload: { name, value } }) {
    return {
      ...state,
      loginField: {
        ...state.loginField,
        [name]: value,
      },
    };
  },
  setAccessToken(state, { payload: { accessToken } }) {
    return {
      ...state,
      accessToken,
    };
  },
  changeReviewField(state, { payload: { name, value } }) {
    return {
      ...state,
      reviewField: {
        ...state.reviewField,
        [name]: value,
      },
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
