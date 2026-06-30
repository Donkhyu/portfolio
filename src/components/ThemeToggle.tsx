import { useEffect, useState } from 'react';

type Theme = 'day' | 'night';

function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === 'day' || set === 'night') return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
}

export default function ThemeToggle() {
  // `mounted` avoids a hydration mismatch: the server can't know the theme.
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('day');

  useEffect(() => {
    setTheme(currentTheme());
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === 'night' ? 'day' : 'night';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore — private mode etc. */
    }
    setTheme(next);
  }

  const isNight = theme === 'night';
  const label = isNight ? 'Switch to Day Roast' : 'Switch to Late Night';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
      aria-pressed={mounted ? isNight : undefined}
    >
      <span className="tt-icon" aria-hidden="true">
        {isNight ? (
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path
              d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18">
            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
            </g>
          </svg>
        )}
      </span>
    </button>
  );
}
