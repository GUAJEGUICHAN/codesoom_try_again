import { fireEvent, render } from '@testing-library/react';
import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders Log Out Button', () => {
    const handleClick = jest.fn();
    const { getByText } = render((
      <LogoutForm onClick={handleClick} />
    ));

    expect(getByText('Log Out')).not.toBeNull();

    fireEvent.click(getByText('Log Out'));

    expect(handleClick).toBeCalled();
  });
});
