import { render, screen } from '@testing-library/react';
import <%= name.toPascalCase() %> from './<%= name.toPascalCase() %>';

it('Renders the <%= name %> element', () => {
  render(<<%= name.toPascalCase() %> />);
  const div = screen.getByText(/<%= name %>/i);
  expect(div).toBeInTheDocument();
});
