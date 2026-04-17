import { useEffect } from 'react';

type HeaderToggleClass = {
  themeToggle: boolean;
};

const ThemeToggle = ({ themeToggle }: HeaderToggleClass) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    document.documentElement.setAttribute('data-theme-loading', 'true');

    const checkbox = document.getElementById('theme-mode') as HTMLInputElement | null;
    const savedTheme = localStorage.getItem('theme') || 'dark';

    document.documentElement.setAttribute('data-bs-theme', savedTheme);

    if (checkbox) checkbox.checked = savedTheme === 'dark';

    document.documentElement.removeAttribute('data-theme-loading');

    const handleToggle = () => {
      const newTheme = checkbox?.checked ? 'dark' : 'light';

      document.documentElement.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      // 🔥 Trigger update everywhere
      window.dispatchEvent(new Event('themeChange'));
    };

    checkbox?.addEventListener('change', handleToggle);

    return () => checkbox?.removeEventListener('change', handleToggle);
  }, []);

  return (
    <div className="pe-lg-1 ms-auto me-4" data-bs-theme={themeToggle ? 'dark' : 'light'}>
      <div className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4">
        <input type="checkbox" className="form-check-input" id="theme-mode" />
        <label
          className="form-check-label fs-sm text-white-50 d-none d-sm-block"
          htmlFor="theme-mode"
        >
          Light
        </label>
        <label
          className="form-check-label text-white-50 fs-sm d-none d-sm-block"
          htmlFor="theme-mode"
        >
          Dark
        </label>
      </div>
    </div>
  );
};

export default ThemeToggle;
