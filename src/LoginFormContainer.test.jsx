import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
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
      const { getByLabelText } = render(<LoginFormContainer />);

      expect(getByLabelText('Email').value).toBe('');

      fireEvent.change(getByLabelText('Email'), {
        target: { value: 'test@example.com' },
      });

      expect(dispatch).toBeCalledTimes(1);
    });
  });
  context('when wrtie password in ', () => {
    it('', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      expect(getByLabelText('Password').value).toBe('');

      fireEvent.change(getByLabelText('Email'), {
        target: { value: 'test@example.com' },
      });

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('when click "Log In" ', () => {
    it('', () => {
      const { getByText } = render(<LoginFormContainer />);

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('when got TOKEN', () => {
    given('token', () => 'TOKEN');

    it('', () => {
      const { container } = render(<LoginFormContainer />);

      expect(container).toHaveTextContent('TOKEN');
    });
  });
});
