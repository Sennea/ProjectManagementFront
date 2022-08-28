import React from 'react';
import { render } from '@testing-library/react';
import ProjectPlaceholder from './ProjectPlaceholder';

const props = {

};

describe('ProjectPlaceholder', () => {
  it('should render ProjectPlaceholder component properly', () => {
    const { getByTestId } = render(<ProjectPlaceholder {...props} />);
    expect(getByTestId('ProjectPlaceholderWrapper')).toBeInTheDocument()
  });
});