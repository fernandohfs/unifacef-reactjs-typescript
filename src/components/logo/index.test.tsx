import React from 'react';
import { render } from '@testing-library/react';
import Logo from './index';

describe('Logo component', () => {
  it('should render logotipo component', () => {
    const logo = render(<Logo />);

    expect(logo).toMatchSnapshot();
  });
})