import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeReviewField, loadRestaurant, sendReview } from './actions';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';

import { get, isEmptyObject } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  useEffect(() => {
    if (restaurantId) {
      dispatch(loadRestaurant(restaurantId));
    }
  }, []);

  if (isEmptyObject(restaurant)) {
    return <div>로딩중</div>;
  }

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {
        accessToken
          ? (
            <ReviewForm
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          ) : null
      }
    </>

  );
}
