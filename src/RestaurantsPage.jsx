import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CategoriesContainer from './CategoriesContainer';
import RegionsContainer from './RegionsContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

export default function RestaurantsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadInitialData());
  });
  function handleClickRestaurant(restaurant) {
    navigate(`${restaurant.id}`);
  }

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </>
  );
}
