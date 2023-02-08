import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../..';

describe('App renders successfully', () => {
  it('renders learn react link', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Olúwáségun/i);
    expect(linkElement).toBeInTheDocument();
  });
});
