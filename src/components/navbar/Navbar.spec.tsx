import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './Navbar';

describe('renders successfully', () => {
  it('renders the body', () => {
    render(
      <BrowserRouter>
        <Switch>
          <Route exact path="*" component={NavigationBar} />
        </Switch>
      </BrowserRouter>,
    );
    const navElement = screen.getAllByRole(/nav/i);
    const linkElement = screen.getAllByRole(/Link/i);
    expect(navElement).toHaveLength(1);
    expect(linkElement).toHaveLength(1);
  });
});
