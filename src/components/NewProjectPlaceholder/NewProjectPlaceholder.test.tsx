import React from 'react';
import { render } from '@testing-library/react';
import NewProjectPlaceholder from './NewProjectPlaceholder';

const props = {

};

describe('NewProjectPlaceholder', () => {
  it('should render NewProjectPlaceholder component properly', () => {
    const { getByTestId } = render(<NewProjectPlaceholder {...props} />);
    expect(getByTestId('NewProjectPlaceholderWrapper')).toBeInTheDocument()
  });
});