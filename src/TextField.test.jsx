import { fireEvent, render } from '@testing-library/react';

import given from 'given2';

import TextField from './TextField';

jest.mock('react-redux');

describe('TextField', () => {
  const handleChange = jest.fn();

  const rendersTextField = () => (render((
    <TextField
      label={given.label}
      type={given.type}
      name={given.inputName}
      onChange={handleChange}
    />
  )));

  beforeEach(() => {
    handleChange.mockClear();
  });

  context('with type', () => {
    given('label', () => '평점');
    given('type', () => 'number');
    given('inputName', () => 'score');
    it('renders label and input control', () => {
      const { getByLabelText } = rendersTextField();

      expect(getByLabelText('평점').value).not.toBeNull();
    });
    it('renders label and input control', () => {
      const { getByLabelText } = rendersTextField();

      fireEvent.change(getByLabelText('평점'), {
        target: { value: 3 },
      });

      expect(handleChange).toBeCalledTimes(1);
    });
  });
  context('without type', () => {
    given('label', () => '리뷰 내용');
    given('inputName', () => 'description');
    it('renders label and input control', () => {
      const { container, getByLabelText } = rendersTextField();

      expect(getByLabelText('리뷰 내용').value).not.toBeNull();
      expect(container).toContainHTML('type="text"');
    });
    it('renders label and input control', () => {
      const { getByLabelText } = rendersTextField();

      fireEvent.change(getByLabelText('리뷰 내용'), {
        target: { value: 3 },
      });

      expect(handleChange).toBeCalledTimes(1);
    });
  });
});
