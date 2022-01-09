import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

test('NotFoundPage', () => {
  // NotFoundPage렌더만 확인
  render((<NotFoundPage />));
});
