import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

describe('App renders successfully', () => {
  it('renders learn react link', () => {
    render(
      <BrowserRouter>
        <Switch>
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>,
    );
    const linkElement = screen.queryAllByText('Comming Soon. . .');
    expect(linkElement).toHaveLength(1);
  });
});
