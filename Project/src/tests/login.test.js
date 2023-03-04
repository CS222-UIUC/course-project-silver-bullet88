import { render, screen } from '@testing-library/react';
import App from '../App';
import Login from '../pages/login';

test('renders login page', () => {
  render(<Login />);
  const your_email = screen.getByText("email");
  expect(your_email).toBeInTheDocument();
  const your_pwd = screen.getByText("password");
  expect(your_pwd).toBeInTheDocument();
  const greeting = screen.getByText("Nice to see u!");
  expect(greeting).toBeInTheDocument();
});
