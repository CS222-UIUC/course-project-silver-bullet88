import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders welcome/home page', () => {
  render(<Home />);
  const welcome = screen.getByText("welcome");
  expect(welcome).toBeInTheDocument();
});
