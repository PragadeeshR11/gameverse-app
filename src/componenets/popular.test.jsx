import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Popular from './Popular';
import { gameAPI } from '../services/gameAPI';

const mockGames = {
  latest: [
    {
      id: 1,

      name: 'God of War',

      background_image: 'god.jpg',

      released: '2025-01-01',
    },
  ],

  toprated: [
    {
      id: 2,

      name: 'Cyberpunk',

      background_image: 'cyber.jpg',

      released: '2024-05-01',
    },
  ],
};

vi.mock('../hooks/useActiveNav', () => ({
  default: vi.fn(),
}));

vi.mock('../services/gameAPI', () => ({
  gameAPI: vi.fn(),
}));

describe('Popular Component', () => {
  ((test('renders games after successful API call', async () => {
    gameAPI.mockResolvedValue(mockGames);

    render(<Popular />);

    expect(await screen.findByText('God of War')).toBeInTheDocument();

    expect(await screen.findByText('Cyberpunk')).toBeInTheDocument();
  }),
  test('shows error when API fails', async () => {
    gameAPI.mockRejectedValue(new Error('API Failed'));

    render(<Popular />);

    expect(
      await screen.findByText('Unable to load games. Please try again later !!')
    ).toBeInTheDocument();
  })),
    test('shows loading skeleton initially', () => {
      gameAPI.mockImplementation(() => new Promise(() => {}));

      render(<Popular />);

      expect(document.querySelector('.animate-pulse')).toBeTruthy();
    }));
});
