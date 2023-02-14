import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

describe('App renders successfully', () => {
  it('renders learn react link', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>,
    );
    const linkElement = screen.queryAllByText('Comming Soon. . .');
    expect(linkElement).toHaveLength(1);
  });
});
