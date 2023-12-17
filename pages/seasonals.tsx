import { NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';
import { Metadata } from '../layouts/components/Seo';

import MarkdownText from '../components/markdown-text';
import Gallery from '../components/gallery';

interface SeasonalsPageProps {
  name: string;
  metadata: Metadata;
  content: {
    heading: string;
    content: string;
  };
  seasonals: {
    name: string;
    description?: string;
    images: {
      source: string;
      alt: string;
    }[];
  }[];
}

const SeasonalsPage: NextPage<SeasonalsPageProps> = ({ name, metadata, content, seasonals }) => {
  return (
    <PageLayout seo={metadata}>
      <div className="relative h-64 overflow-clip">
        <div className="absolute inset-0">
          <img className="object-cover w-full h-full" src="/assets/hero-image.jpg" alt="red and white flowers closeup" />
        </div>
      </div>
      <h1 className="px-4 mx-auto my-8 text-4xl font-bold text-primary max-w-7xl">{content.heading}</h1>
      <section className="px-4 mx-auto my-8 max-w-7xl">
        <div className="space-y-4 text-xl">{content.content}</div>
      </section>

      <section className="px-4 mx-auto my-8 max-w-7xl">
        {seasonals.map(seasonal => (
          <div key={seasonal.name} className="space-y-4">
            <h2 className="mt-16 mb-8 text-3xl font-bold text-primary">{seasonal.name}</h2>
            {seasonal.description && <div className="space-y-4 text-xl">{seasonal.description}</div>}
            <Gallery images={seasonal.images || []} title={seasonal.name} />
          </div>
        ))}
      </section>
    </PageLayout>
  );
};

export async function getStaticProps() {
  const page = await import('../content/pages/seasonals.md').catch(error => null);

  if (!page) return { props: {} };

  const { name, metadata, content, seasonals } = page.attributes;

  return {
    props: {
      name,
      metadata,
      content,
      seasonals,
    },
  };
}

export default SeasonalsPage;
