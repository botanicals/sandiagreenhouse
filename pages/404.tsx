import { NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';

const NotFound: NextPage = () => {
  return (
    <PageLayout seo={{ title: 'Page not found...', slug: '' }}>
      <div className="relative h-64 overflow-clip">
        <div className="absolute inset-0">
          <img className="object-cover w-full h-full" src="/assets/hero-image.jpg" alt="red and white flowers closeup" />
        </div>
      </div>
      <h1 className="mx-auto my-8 text-4xl font-bold text-primary max-w-7xl">Page not found...</h1>
      <section className="mx-auto my-8 max-w-7xl">
        <div className="space-y-4">
          <p>We are sorry, the page you are looking for could not be found.</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
