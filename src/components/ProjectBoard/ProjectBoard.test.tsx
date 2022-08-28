import React from 'react';
import { render } from '@testing-library/react';
import ProjectBoard from './ProjectBoard';

const props = {

};

describe('ProjectBoard', () => {
  it('should render ProjectBoard component properly', () => {
    const { getByTestId } = render(<ProjectBoard {...props} />);
    expect(getByTestId('ProjectBoardWrapper')).toBeInTheDocument()
  });
});