import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

const props = {

};

describe('Home', () => {
  it('should render Home component properly', () => {
    const { getByTestId } = render(<Home {...props} />);
    expect(getByTestId('HomeWrapper')).toBeInTheDocument()
  });
});