import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurant } from './actions';

import RestaurantDetail from './RestaurantDetail';

import { get, isEmptyObject } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const restaurant = useSelector(get('restaurant'));
  useEffect(() => {
    if (restaurantId) {
      dispatch(loadRestaurant(restaurantId));
    }
  }, []);

  if (isEmptyObject(restaurant)) {
    return <div>로딩중</div>;
  }

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
