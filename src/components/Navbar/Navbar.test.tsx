import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

const props = {

};

describe('Navbar', () => {
  it('should render Navbar component properly', () => {
    const { getByTestId } = render(<Navbar {...props} />);
    expect(getByTestId('NavbarWrapper')).toBeInTheDocument()
  });
});