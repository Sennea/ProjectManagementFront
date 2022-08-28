import React from 'react';
import { render } from '@testing-library/react';
import ProjectsList from './ProjectBoardsList';

const props = {

};

describe('ProjectsList', () => {
  it('should render ProjectsList component properly', () => {
    const { getByTestId } = render(<ProjectsList {...props} />);
    expect(getByTestId('ProjectsListWrapper')).toBeInTheDocument()
  });
});