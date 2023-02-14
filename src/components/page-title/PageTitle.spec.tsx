import React from 'react';
import { render, screen } from '@testing-library/react';
import PageTitle from './PageTitle';

describe('renders successfully', () => {
  it('renders the body', () => {
    render(<PageTitle titleText="Hello World" />);
    const divElement = screen.queryAllByText('Hello World');
    expect(divElement).toHaveLength(1);
  });
});

