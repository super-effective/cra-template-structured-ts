import { render, screen } from '@testing-library/react';
import Page from './Page';

it('Renders the page element', () => {
  render(<Page />);
  const pageDiv = screen.getByText(/Page/i);
  expect(pageDiv).toBeInTheDocument();
});
