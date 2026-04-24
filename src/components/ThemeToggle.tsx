import { useEffect } from 'react';

type HeaderToggleClass = {
  themeToggle: boolean;
  id?: string; // ← allow unique ID
};

const ThemeToggle = ({ themeToggle, id = 'theme-mode' }: HeaderToggleClass) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkbox = document.getElementById(id) as HTMLInputElement | null;

 
    let savedTheme = localStorage.getItem('theme');

    if (!savedTheme) {
      savedTheme = 'dark'; 
      localStorage.setItem('theme', savedTheme); 
    }

    // Apply theme
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    if (checkbox) checkbox.checked = savedTheme === 'dark';

    const handleToggle = () => {
      const newTheme = checkbox?.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      window.dispatchEvent(new Event('themeChange'));
    };

    const handleExternalChange = () => {
      const current = localStorage.getItem('theme') || 'dark';
      if (checkbox) checkbox.checked = current === 'dark';
    };

    checkbox?.addEventListener('change', handleToggle);
    window.addEventListener('themeChange', handleExternalChange);

    return () => {
      checkbox?.removeEventListener('change', handleToggle);
      window.removeEventListener('themeChange', handleExternalChange);
    };
  }, [id]);

  return (
    <div className="pe-lg-1 ms-auto me-4" data-bs-theme={themeToggle ? 'dark' : 'light'}>
      <div className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4">
        <input type="checkbox" className="form-check-input" id={id} /> {/* ← unique id */}
        <label className="form-check-label fs-sm text-white-50 d-none d-sm-block" htmlFor={id}>
          Light
        </label>
        <label className="form-check-label text-white-50 fs-sm d-none d-sm-block" htmlFor={id}>
          Dark
        </label>
      </div>
    </div>
  );
};

export default ThemeToggle;
