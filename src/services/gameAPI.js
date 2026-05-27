import Popular from '../componenets/Popular';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export async function gameAPI() {
  try {
    const res1 = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&dates=2025-01-01,2026-12-31&platforms=187&metacritic=100&page_size=12`
    );
    const res2 = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&dates=2022-01-01,2024-12-31&publishers=354,918&genres=action&page_size=12`
    );

    if (!res1.ok || !res2.ok) {
      throw new Error('Failed to fetch games');
    }

    const data1 = await res1.json();
    const data2 = await res2.json();
    return {
      latest: data1.results,
      toprated: data2.results,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}
