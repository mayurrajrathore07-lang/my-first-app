import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the resume page when navigating to /resume', () => {
  window.history.pushState({}, '', '/resume');
  render(<App />);

  expect(screen.getByText(/my resume/i)).toBeInTheDocument();
});

test('renders the experience section anchor for the navbar link', () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  expect(document.getElementById('experience')).toBeInTheDocument();
});
