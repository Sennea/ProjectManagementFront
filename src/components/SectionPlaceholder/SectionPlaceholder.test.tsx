import React from 'react';
import { render } from '@testing-library/react';
import SectionPlaceholder from './SectionPlaceholder';

const props = {

};

describe('SectionPlaceholder', () => {
  it('should render SectionPlaceholder component properly', () => {
    const { getByTestId } = render(<SectionPlaceholder {...props} />);
    expect(getByTestId('SectionPlaceholderWrapper')).toBeInTheDocument()
  });
});