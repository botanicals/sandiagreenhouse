import Link from 'next/link';
import { NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';
import { Metadata } from '../layouts/components/Seo';

import Gallery from '../components/gallery';
import MarkdownText from '../components/markdown-text';
import NewlineText from '../components/newline-text';

interface IndexPageProps {
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
  businessDetails: {
    phoneNumber: {
      text: string;
      href: string;
    };
    hours: string;
    address: string;
    map: {
      title: string;
      source: string;
    };
  };
  pricelist: {
    heading: string;
    button: {
      text: string;
      href: string;
    };
  };
  gallery: {
    images: {
      source: string;
      alt: string;
      columns: 1 | 2 | 3 | 4;
      rows: 1 | 2 | 3 | 4;
    }[];
  };
}

const IndexPage: NextPage<IndexPageProps> = ({ name, metadata, content, businessDetails, pricelist, gallery }) => {
  return (
    <PageLayout seo={metadata}>
      <div className="relative">
        <div className="">
          <img className="object-contain w-full h-full" src="/assets/sandia-hero.jpg" alt="red and white flowers closeup" />
        </div>
      </div>

      <h1 className="px-4 mx-auto my-8 text-4xl font-bold text-primary max-w-7xl">{content.heading}</h1>

      <section className="grid gap-8 px-4 mx-auto my-8 md:grid-cols-2 max-w-7xl">
        <div className="space-y-4">
          <MarkdownText>{content.content}</MarkdownText>
        </div>
        <div>
          <figure className="w-full h-auto">
            <img src={content.image.source} alt={content.image.alt} />
          </figure>
        </div>
      </section>

      <section className="px-4 my-8 bg-primary text-light">
        <div className="grid gap-8 py-16 mx-auto max-w-7xl md:grid-cols-2">
          <div className="space-y-16">
            <div>
              <p className="mb-2 text-3xl font-bold">Phone</p>
              <p>{businessDetails.phoneNumber.text}</p>
            </div>

            <div>
              <p className="mb-2 text-3xl font-bold">Hours</p>
              <NewlineText>{businessDetails.hours}</NewlineText>
            </div>

            <div>
              <p className="mb-2 text-3xl font-bold">Address</p>
              <NewlineText>{businessDetails.address}</NewlineText>
            </div>
          </div>

          <div className="w-full h-96">
            <iframe src={businessDetails.map.source} width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={businessDetails.map.title}></iframe>
          </div>
        </div>
      </section>

      <section className="px-4 mx-auto my-8 max-w-7xl">
        <div className="relative flex items-center justify-center py-16">
          <div className="border-4 w-full h-96 md:w-[500px] md:h-[500px] border-light-deep absolute top-4 md:left-[25%]"></div>
          <div className="w-full h-96 md:w-[500px] md:h-[500px] bg-primary z-10 text-light flex flex-col justify-center items-center">
            <h2 className="mb-8 text-3xl font-bold">{pricelist.heading}</h2>
            <Link href={`/${pricelist.button.href}`}>
              <a className="px-4 py-2 font-semibold tracking-wide uppercase border-2 hover:bg-light hover:text-primary rounded-3xl border-light">{pricelist.button.text}</a>
            </Link>
          </div>
          <div className="border-4 w-full h-96 md:w-[500px] md:h-[500px] border-light-deep absolute bottom-4 md:right-[25%]"></div>
        </div>
      </section>

      <section className="px-4 mx-auto my-16 max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-primary">Gallery</h2>
        <Gallery data={{ type: 'gallery', images: gallery.images }} />
      </section>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const page = await import('../content/pages/home.md').catch(error => null);

  if (!page) return { props: {} };

  const { name, metadata, content, businessDetails, pricelist, gallery } = page.attributes;

  return {
    props: {
      name,
      metadata,
      content,
      businessDetails,
      pricelist,
      gallery,
    },
  };
};

export default IndexPage;
