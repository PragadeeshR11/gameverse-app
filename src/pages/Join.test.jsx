import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Join from './Join';

describe('Join Component', () => {
  (test('renders the subscription form', () => {
    render(
      <MemoryRouter>
        <Join />
      </MemoryRouter>
    );

    expect(screen.getByText('Just Few More Steps')).toBeInTheDocument();
  }),
    test('renders all required form fields', () => {
      render(
        <MemoryRouter>
          <Join />
        </MemoryRouter>
      );

      expect(screen.getByLabelText('Username')).toBeInTheDocument();
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Selected Plan')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Dive-In' })).toBeInTheDocument();
    }),
    test('allows user to enter username and email', async () => {
      render(
        <MemoryRouter>
          <Join />
        </MemoryRouter>
      );

      const usernameInput = screen.getByLabelText('Username');
      const emailInput = screen.getByLabelText('Email');
      await userEvent.type(usernameInput, 'Pragadeesh');
      await userEvent.type(emailInput, 'pragadeesh@gmail.com');
      expect(usernameInput).toHaveValue('Pragadeesh');
      expect(emailInput).toHaveValue('pragadeesh@gmail.com');
    }));
});
