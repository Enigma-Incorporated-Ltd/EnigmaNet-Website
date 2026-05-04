import type { BlogPost } from '@/services/cmsApi';
import NextPageSlider from '@/components/ui/NextPageSlider';
import { useSlug } from '@/utils/useSlug';


interface BlogProps {
  related: BlogPost[];
}

const Blog = ({ related }: BlogProps) => {
  if (related.length === 0) return null;
  const slug = useSlug();
  return (
    <section className="container mb-5 pt-md-4">
      <NextPageSlider
        buttonText=" All Blogs"
        buttonLink="/company/blog"
        title="Related Blogs"
        basePath="/company/blog"
        data={related}
        currentSlug={slug as string}
      />
    </section>
  );
};

export default Blog;
