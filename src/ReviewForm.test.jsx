import { fireEvent, render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import ReviewForm from './ReviewForm';

jest.mock('react-redux');

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  useSelector.mockImplementation((selector) => selector({
    reviewField: {
      score: undefined,
      description: '',
    },
  }));

  const rendersReviewForm = () => (render((
    <ReviewForm
      reviewField={{
        score: undefined,
        description: '',
      }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )));

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  context('when wrtie score in ', () => {
    it('', () => {
      const { getByLabelText } = rendersReviewForm();

      expect(getByLabelText('평점').value).toBe('');

      fireEvent.change(getByLabelText('평점'), {
        target: { value: 3 },
      });

      expect(handleChange).toBeCalledTimes(1);
    });
  });

  context('when wrtie description in ', () => {
    it('', () => {
      const { getByLabelText } = rendersReviewForm();

      expect(getByLabelText('리뷰 내용').value).toBe('');

      fireEvent.change(getByLabelText('리뷰 내용'), {
        target: { value: '상세 내용' },
      });

      expect(handleChange).toBeCalledTimes(1);
    });
  });

  context('when click "submit" ', () => {
    given('id', () => (1));
    it('', () => {
      const { getByText } = rendersReviewForm();

      fireEvent.click(getByText('리뷰 남기기'));

      expect(handleSubmit).toBeCalledTimes(1);
    });
  });
});
