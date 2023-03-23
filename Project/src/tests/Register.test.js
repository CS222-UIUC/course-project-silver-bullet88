import { render, screen } from '@testing-library/react';
import Register from '../pages/Register.js';
import { BrowserRouter } from 'react-router-dom';
test('renders register page', () => {
  render(<BrowserRouter> <Register /> </BrowserRouter>);
  const username = screen.getByText("Username");
  expect(username).toBeInTheDocument();
  const your_email = screen.getByText("Email");
  expect(your_email).toBeInTheDocument();
  const your_pwd = screen.getByText("Password");
  expect(your_pwd).toBeInTheDocument();
  
});