import { render, fireEvent, waitFor} from '@testing-library/react';
import Question from '../pages/Question';

test('renders heading', () => {
  const { getByText } = render(<Question />);
  const heading = getByText('Ask me anything here!');
  expect(heading).toBeInTheDocument();
});

test('Submit button is disabled when there is no text in the input', () => {
  const { getByPlaceholderText, getByText } = render(<Question />);
  const input = getByPlaceholderText('e.g What\'s your favorite color?');
  const button = getByText('Send');

  expect(button.disabled).toBe(true);

  fireEvent.change(input, { target: { value: 'What is your name?' } });

  expect(button.disabled).toBe(false);
});

test('should render modal with success message when form is submitted', async () => {
  const { getByPlaceholderText,getByRole,getByText } = render(<Question />);
  const questionInput = getByPlaceholderText(/e\.g What's your favorite color\?/i);
  fireEvent.change(questionInput, { target: { value: 'What is your name?' } });
  const submitButton = getByRole('button', { name: /send/i });
  fireEvent.click(submitButton);
  const successMessage = await waitFor(() => getByText(/submit successfully/i));
  expect(successMessage).toBeInTheDocument();
});
