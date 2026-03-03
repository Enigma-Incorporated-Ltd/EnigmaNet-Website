import { useEffect } from 'react';

type HeaderToggleClass = {
  themeToggle: boolean;
};

const ThemeToggle = ({ themeToggle }: HeaderToggleClass) => {
  useEffect(() => {
    if (typeof window === 'undefined') return; 

    document.documentElement.setAttribute('data-theme-loading', 'true');

    const checkbox = document.getElementById('theme-mode') as HTMLInputElement | null;
    const savedTheme = localStorage.getItem('theme') || 'light';

    document.body.setAttribute('data-bs-theme', savedTheme);
    if (checkbox) checkbox.checked = savedTheme === 'dark';

    document.documentElement.removeAttribute('data-theme-loading');

    const handleToggle = () => {
      const newTheme = checkbox?.checked ? 'dark' : 'light';
      document.body.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    };

    checkbox?.addEventListener('change', handleToggle);
    return () => checkbox?.removeEventListener('change', handleToggle);
  }, []);

  return (
    <div className="pe-lg-1 ms-auto me-4" data-bs-theme={themeToggle ? 'dark' : 'light'}>
      <div className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4">
        <input type="checkbox" className="form-check-input" id="theme-mode" />
        <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">
          Light
        </label>
        <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">
          Dark
        </label>
      </div>
    </div>
  );
};

export default ThemeToggle;
