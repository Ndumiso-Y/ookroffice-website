import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Suppress video/audio JSDOM errors in tests
window.HTMLMediaElement.prototype.load = () => {};
window.HTMLMediaElement.prototype.play = () => Promise.resolve();
window.HTMLMediaElement.prototype.pause = () => {};

// Stub IntersectionObserver (used by GSAP / lazy images)
window.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

test('app renders without crashing', () => {
  render(<App />);
  expect(document.body).toBeTruthy();
});

test('404 page renders for unknown route', () => {
  // App uses BrowserRouter internally — we test NotFound in isolation
  const { NotFound } = require('./Components/NotFound');
  // NotFound is a default export so import differently
  const NotFoundComponent = require('./Components/NotFound').default;
  render(
    <MemoryRouter>
      <NotFoundComponent />
    </MemoryRouter>
  );
  expect(screen.getByText('404')).toBeInTheDocument();
});

test('privacy page renders when type=privacy', () => {
  const NotFoundComponent = require('./Components/NotFound').default;
  render(
    <MemoryRouter>
      <NotFoundComponent type="privacy" />
    </MemoryRouter>
  );
  expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
});
