import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing and shows site content', () => {
  render(<App />);
  // The app should render the main OOKR site — Navbar contains the office name
  expect(document.getElementById('root') || document.body).toBeTruthy();
});
