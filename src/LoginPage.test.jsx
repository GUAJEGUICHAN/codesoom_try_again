import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    loginField: {
      email: '',
      password: '',
    },
    accessToken: given.token,
  }));

  // 이메일 적었을 때
  // 패스워드 적었을 때
  // 제출 눌렀을 때
  // 토큰값 있을 때
  beforeEach(() => {
    dispatch.mockClear();
  });
  context('when wrtie email in ', () => {
    it('', () => {
      const { getByLabelText } = render(<LoginPage />);

      expect(getByLabelText('Email').value).toBe('');

      fireEvent.change(getByLabelText('Email'), {
        target: { value: 'test@example.com' },
      });

      expect(dispatch).toBeCalledTimes(1);
    });
  });
  context('when wrtie password in ', () => {
    it('', () => {
      const { getByLabelText } = render(<LoginPage />);

      expect(getByLabelText('Password').value).toBe('');

      fireEvent.change(getByLabelText('Email'), {
        target: { value: 'test@example.com' },
      });

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('when click "Log In" ', () => {
    it('', () => {
      const { getByText } = render(<LoginPage />);

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('when got TOKEN', () => {
    given('token', () => 'TOKEN');

    it('', () => {
      const { container } = render(<LoginPage />);

      expect(container).toHaveTextContent('TOKEN');
    });
  });
});
