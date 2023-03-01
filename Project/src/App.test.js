import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome/home page', () => {
  render(<App />);
  const welcome = screen.getByText("welcome");
  expect(welcome).toBeInTheDocument();
});
