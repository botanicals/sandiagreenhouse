import { NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';
import { Metadata } from '../layouts/components/Seo';

import MarkdownText from '../components/markdown-text';

interface AboutPageProps {
  name: string;
  metadata: Metadata;
  content: {
    heading: string;
    content: string;
    image: {
      source: string;
      alt: string;
      caption: string;
    };
  };
}

const AboutPage: NextPage<AboutPageProps> = ({ name, metadata, content }) => {
  return (
    <PageLayout seo={metadata}>
      <div className="relative h-64 overflow-clip">
        <div className="absolute inset-0">
          <img className="object-cover w-full h-full" src="/assets/hero-image.jpg" alt="red and white flowers closeup" />
        </div>
      </div>
      <h1 className="mx-auto my-8 text-4xl font-bold text-primary max-w-7xl">{content.heading}</h1>
      <section className="grid gap-8 mx-auto my-8 md:grid-cols-2 max-w-7xl">
        <div className="space-y-4">
          <MarkdownText>{content.content}</MarkdownText>
        </div>
        <div>
          <figure className="w-full h-auto">
            <img src={content.image.source} alt={content.image.alt} />
          </figure>
        </div>
      </section>
    </PageLayout>
  );
};

export async function getStaticProps() {
  const page = await import('../content/pages/about.md').catch(error => null);

  if (!page) return { props: {} };

  const { name, metadata, content } = page.attributes;

  return {
    props: {
      name,
      metadata,
      content,
    },
  };
}

export default AboutPage;
