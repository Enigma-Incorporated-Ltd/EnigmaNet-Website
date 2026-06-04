import { useParams } from 'react-router-dom';
import StoryblokPage from './StoryblokPage';

export default function StoryblokArticle() {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  return <StoryblokPage slug={`articles/${articleSlug}`} />;
}
