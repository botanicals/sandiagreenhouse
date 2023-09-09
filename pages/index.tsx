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
  testimonials: {
    heading: string;
    reviews: {
      stars: number;
      when: string;
      content: string;
      author: string;
    }[];
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

const IndexPage: NextPage<IndexPageProps> = ({ name, metadata, content, businessDetails, pricelist, testimonials, gallery }) => {
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

      <section className="px-4 py-16 my-8 bg-primary text-light">
        <h2 className="pb-8 mx-auto text-3xl font-bold max-w-7xl">{testimonials.heading}</h2>
        <div className="grid gap-16 mx-auto max-w-7xl md:grid-cols-3">
          {testimonials.reviews.map((review, index) => (
            <div key={`${review.author} ${index}`} className="">
              <div className="relative px-8 pt-3">
                <span className="absolute top-0 left-0 text-7xl">&ldquo;</span>
                <NewlineText>{review.content}</NewlineText>
              </div>
              <p className="my-4 italic">
                <span className="font-bold">By {review.author}</span> - {review.when}
              </p>
              <div className="flex my-4">
                {Array.from({ length: review.stars }, (_, i) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                )).map(star => star)}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 space-x-8 max-w-7xl">
          <a
            className="px-4 py-2 border-2 rounded-full bg-light text-primary hover:bg-primary hover:text-light hover:border-light"
            href="https://www.google.com/search?hl=en-US&gl=us&q=Sandia+Nursery,+Washington,+UT+84780&ludocid=17350137008794683629&lsig=AB86z5XjOSqfebZg0dvV-XvI4kK7#lrd=0x80ca50a0fa23009f:0xf0c811af3d90c8ed,3"
            target="_blank"
            rel="noreferrer"
          >
            Write a Review
          </a>
          <a
            className="px-4 py-2 border-2 rounded-full bg-primary text-light border-light hover:bg-light hover:text-primary"
            href="https://www.google.com/search?hl=en-US&gl=us&q=Sandia+Nursery,+Washington,+UT+84780&ludocid=17350137008794683629&lsig=AB86z5XjOSqfebZg0dvV-XvI4kK7#lrd=0x80ca50a0fa23009f:0xf0c811af3d90c8ed,1"
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </section>

      <section className="px-4 mx-auto my-16 max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-primary">Gallery</h2>
        <Gallery images={gallery.images} />
      </section>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const page = await import('../content/pages/home.md').catch(error => null);

  if (!page) return { props: {} };

  const { name, metadata, content, businessDetails, pricelist, testimonials, gallery } = page.attributes;

  return {
    props: {
      name,
      metadata,
      content,
      businessDetails,
      pricelist,
      testimonials,
      gallery,
    },
  };
};

export default IndexPage;
