import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('renders successfully', () => {
  it('renders the body sections', () => {
    render(<Button value="test button" onClick={() => ''} className="" />);
    const buttonText = screen.getByText(/test button/i);
    expect(buttonText).toBeInTheDocument();
  });
});
