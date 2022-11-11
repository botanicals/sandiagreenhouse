import { NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';
import { Metadata } from '../layouts/components/Seo';

interface PDF {
  name: string;
  description: string;
  file: string;
}

interface PricelistPageProps {
  name: string;
  metadata: Metadata;
  pricelist: {
    pdfs: PDF[];
  };
}

const PricelistPage: NextPage<PricelistPageProps> = ({ name, metadata, pricelist }) => {
  return (
    <PageLayout seo={metadata}>
      <div className="relative h-64 overflow-clip">
        <div className="absolute inset-0">
          <img className="object-cover w-full h-full" src="/assets/hero-image.jpg" alt="red and white flowers closeup" />
        </div>
      </div>
      <h1 className="px-4 mx-auto my-8 text-4xl font-bold text-primary max-w-7xl">Pricelist</h1>
      <section className="px-4 mx-auto my-8 max-w-7xl">
        {pricelist.pdfs.map((pdf: PDF, index: number) => {
          return (
            <div className="w-full" key={index}>
              <h2 className="mb-2 text-2xl font-bold text-primary">{pdf.name}</h2>
              <embed className="w-full min-h-[1000px] border-4 border-light-deep" type="application/pdf" src={pdf.file} />
            </div>
          );
        })}
      </section>
    </PageLayout>
  );
};

export async function getStaticProps() {
  const page = await import('../content/pages/pricelist.md').catch(error => null);

  if (!page) return { props: {} };

  const { name, metadata, pricelist } = page.attributes;

  return {
    props: {
      name,
      metadata,
      pricelist,
    },
  };
}

export default PricelistPage;
