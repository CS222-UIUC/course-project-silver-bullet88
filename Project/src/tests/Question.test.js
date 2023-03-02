import { render, screen } from '@testing-library/react';
import Question from '../pages/Question';

test('renders /question page', () => {
  render(<Question />);
  const sample_question = screen.getByText("e.g. What's your favourite color?");
  expect(sample_question).toBeInTheDocument();
});
