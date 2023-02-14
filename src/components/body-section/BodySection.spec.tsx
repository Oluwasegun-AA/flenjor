import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySubSection from './BodySection';

describe('renders successfully', () => {
  it('renders the body', () => {
    render(
      <BodySubSection
        leftPane={<div> left </div>}
        centerPane={<div> center </div>}
        rightPane={<div> right </div>}
        className=""
      />,
    );
    const leftElement = screen.getByText(/left/i);
    const centerElement = screen.getByText(/center/i);
    const rightElement = screen.getByText(/right/i);
    expect(leftElement).toBeInTheDocument();
    expect(centerElement).toBeInTheDocument();
    expect(rightElement).toBeInTheDocument();
  });
});
