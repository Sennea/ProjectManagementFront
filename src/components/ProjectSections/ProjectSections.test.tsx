import React from 'react';
import { render } from '@testing-library/react';
import ProjectSections from './ProjectSections';

const props = {

};

describe('ProjectSections', () => {
  it('should render ProjectSections component properly', () => {
    const { getByTestId } = render(<ProjectSections {...props} />);
    expect(getByTestId('ProjectSectionsWrapper')).toBeInTheDocument()
  });
});