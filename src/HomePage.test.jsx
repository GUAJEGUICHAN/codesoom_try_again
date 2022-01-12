import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

test('HomePage', () => {
  // HomePage렌더만 확인
  render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));
});
