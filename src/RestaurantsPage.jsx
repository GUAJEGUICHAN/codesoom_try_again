import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';
import RegionsContainer from './RegionsContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

export default function RestaurantsPage() {
  // console.log("뭐냐 RestaurantsPage")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });
  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
