import { NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';
import { Metadata } from '../layouts/components/Seo';

import MarkdownText from '../components/markdown-text';

interface EventsPageProps {
  name: string;
  metadata: Metadata;
  headline: {
    source: string;
    alt: string;
    caption?: string;
  };
  content: {
    heading: string;
    content: string;
    image: {
      source: string;
      alt: string;
      caption?: string;
    };
  };
}

const EventsPage: NextPage<EventsPageProps> = ({ name, metadata, headline, content }) => {
  return (
    <PageLayout seo={metadata}>
      <section className="grid gap-8 px-4 mx-auto my-8 max-w-7xl">
        <figure className="w-full h-auto">
          <img src={headline.source} alt={headline.alt} />
        </figure>
      </section>

      <section className="grid gap-8 px-4 mx-auto my-8 md:grid-cols-2 max-w-7xl">
        <div>
          <figure className="w-full h-auto">
            <img src={content.image.source} alt={content.image.alt} />
          </figure>
        </div>

        <div className="space-y-4">
          <h1 className="mx-auto my-8 text-4xl font-bold text-primary">{content.heading}</h1>
          <MarkdownText>{content.content}</MarkdownText>
        </div>
      </section>
    </PageLayout>
  );
};

export async function getStaticProps() {
  const page = await import('../content/pages/events.md').catch(error => null);

  if (!page) return { props: {} };

  const { name, metadata, headline, content } = page.attributes;

  return {
    props: {
      name,
      metadata,
      headline,
      content,
    },
  };
}

export default EventsPage;
