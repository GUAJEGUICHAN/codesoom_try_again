import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  // AboutPage렌더만 확인
  render((<AboutPage />));
});
