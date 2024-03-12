import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('renders successfully', () => {
  it('renders the body', () => {
    render(<Footer />);
    const navElement = screen.getAllByRole(/nav/i);
    const imgElement = screen.getAllByRole(/img/i);
    expect(navElement).toHaveLength(1);
    expect(imgElement).toHaveLength(5);
  });
});
