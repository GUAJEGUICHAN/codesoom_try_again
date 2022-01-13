import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = () => (
    render((
      <LoginForm
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
});
