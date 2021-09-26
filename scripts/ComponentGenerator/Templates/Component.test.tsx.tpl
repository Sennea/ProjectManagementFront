import React from 'react';
import { render } from '@testing-library/react';
import {componentName} from './{componentName}';

const props = {

};

describe('{componentName}', () => {
  it('should render {componentName} component properly', () => {
    const { getByTestId } = render(<{componentName} {...props} />);
    expect(getByTestId('{componentName}Wrapper')).toBeInTheDocument()
  });
});