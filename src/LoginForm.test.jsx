import { fireEvent, render } from '@testing-library/react';

import given from 'given2';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = () => (
    render((
      <LoginForm
        loginField={
          {
            email: '',
            password: '',
          }
        }
        accessToken="TOKEN"
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

    )));

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  context('when wrtie email in ', () => {
    it('', () => {
      const { getByLabelText } = renderLoginForm();

      expect(getByLabelText('Email').value).toBe('');

      fireEvent.change(getByLabelText('Email'), {
        target: { value: 'test@example.com' },
      });

      expect(handleChange).toBeCalled();
    });
  });
  context('when wrtie password in ', () => {
    it('', () => {
      const { getByLabelText } = renderLoginForm();

      expect(getByLabelText('Password').value).toBe('');

      fireEvent.change(getByLabelText('Email'), {
        target: { value: 'test@example.com' },
      });

      expect(handleChange).toBeCalled();
    });
  });

  context('when click "Log In" ', () => {
    it('', () => {
      const { getByText } = renderLoginForm();

      fireEvent.click(getByText('Log In'));

      expect(handleSubmit).toBeCalled();
    });
  });

  context('when got TOKEN', () => {
    given('token', () => 'TOKEN');

    it('', () => {
      const { container } = renderLoginForm();

      expect(container).toHaveTextContent('TOKEN');
    });
  });
});
