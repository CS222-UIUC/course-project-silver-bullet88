import { render, screen } from '@testing-library/react';
import Question from '../pages/Question';

test('renders /question page', () => {
  render(<Question />);
  const title = screen.getByText("Ask me anything here!");
  expect(title).toBeInTheDocument();
});
