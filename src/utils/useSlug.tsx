import { useLocation } from 'react-router';

export const useSlug = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').pop();
  return slug;
};
