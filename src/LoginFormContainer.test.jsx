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
    accessToken: given.accessToken,
  }));

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
    it('dispatch works', () => {
      const { getByText } = render(<LoginFormContainer />);

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('when got TOKEN', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders Log Out button and accessToken', () => {
      const { container } = render(<LoginFormContainer />);

      expect(container).toHaveTextContent('Log Out');
      expect(container).toHaveTextContent(given.accessToken);
    });
  });
  context('when click "Log Out" ', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('dispatch works', () => {
      const { getByText } = render(<LoginFormContainer />);

      fireEvent.click(getByText('Log Out'));

      expect(dispatch).toBeCalledWith({
        type: 'logout',
      });
    });
  });
});
