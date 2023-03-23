import { render, screen } from '@testing-library/react'
import Login from '../pages/login.js';
import { BrowserRouter } from 'react-router-dom';
test('renders login page', () => {
  render(<BrowserRouter> <Login /> </BrowserRouter>);
  const your_email = screen.getByText("Email");
  expect(your_email).toBeInTheDocument();
  const your_pwd = screen.getByText("Password");
  expect(your_pwd).toBeInTheDocument();
  const log_in = screen.getByText("Log In");
  expect(log_in).toBeInTheDocument();  
});
