import { render, screen } from '@testing-library/react';
import App from './App';
import Experience from './components/Experience';

jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: new Proxy(
      {},
      {
        get: (_, prop) => {
          return ({ children, ...props }) => React.createElement(prop, props, children);
        },
      }
    ),
  };
});

test('renders the resume page when navigating to /resume', () => {
  window.history.pushState({}, '', '/resume');
  render(<App />);

  expect(screen.getByRole('heading', { name: /my resume/i })).toBeInTheDocument();
});

test('renders the experience section anchor for the navbar link', () => {
  render(<Experience />);

  expect(document.getElementById('experience')).toBeInTheDocument();
});
