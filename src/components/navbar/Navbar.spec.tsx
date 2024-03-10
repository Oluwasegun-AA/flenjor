import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Navbar';

describe('renders successfully', () => {
  it('renders the body', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NavigationBar />} />
        </Routes>
      </BrowserRouter>,
    );
    const navElement = screen.getAllByRole(/nav/i);
    expect(navElement).toHaveLength(1);
  });
});
