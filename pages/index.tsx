import Link from 'next/link';
// import ErrorPage from 'next/error';

// import PageLayout from '../layouts/PageLayout';
import Seo, { Metadata } from '../layouts/components/Seo';

// import Sections from '../components/sections';
import { NextPage } from 'next';

import { ChevronRightIcon } from '@heroicons/react/solid';
import { DocumentTextIcon } from '@heroicons/react/outline';

const links = [{ title: 'Pricelist', description: 'View our current pricelist', icon: DocumentTextIcon, href: '/pricelist' }];

interface IndexPageProps {
  name: string;
  metadata: Metadata;
  sections: any[];
}

const IndexPage: NextPage<IndexPageProps> = ({ name, metadata, sections }) => {
  return (
    <div className="bg-white">
      <main className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex-shrink-0 pt-16">
          <Link href="/">
            <a>
              <img className="w-auto mx-auto" src="/assets/sandia.png" alt="Sandia Greenhouse" />
            </a>
          </Link>
        </div>
        <div className="max-w-xl py-16 mx-auto sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-green-600 uppercase">Coming soon</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">This site is under construction</h1>
            <p className="mt-2 text-lg text-gray-500">In the meantime, check out our helpful resources</p>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Helpful resources</h2>
            <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
              {links.map((link, linkIdx) => (
                <li key={linkIdx} className="relative flex items-start py-6 space-x-4">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-50">
                      <link.icon className="w-6 h-6 text-green-700" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                        <Link href={link.href}>
                          <a className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            {link.title}
                          </a>
                        </Link>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">{link.description}</p>
                  </div>
                  <div className="self-center flex-shrink-0">
                    <ChevronRightIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );

  // // Check if the required data was provided
  // if (!sections?.length) {
  //   return <ErrorPage statusCode={500} />;
  // }

  // return (
  //   <PageLayout seo={metadata}>
  //     <Sections sections={sections} />
  //   </PageLayout>
  // );
};

// export async function getStaticProps() {
//   const page = await import('../content/pages/index.md').catch(error => null);

//   if (!page) return { props: {} };

//   const { name, metadata, sections = [] } = page.attributes;

//   return {
//     props: {
//       name,
//       metadata,
//       sections,
//     },
//   };
// }

export default IndexPage;
