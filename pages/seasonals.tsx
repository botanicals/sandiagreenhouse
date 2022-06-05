import { NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';

const SeasonalsPage: NextPage = () => {
  return (
    <PageLayout seo={{ title: 'Seasonals', slug: 'seasonals' }}>
      <div className="relative h-64 overflow-clip">
        <div className="absolute inset-0">
          <img className="object-cover w-full h-full" src="/assets/hero-image.jpg" alt="red and white flowers closeup" />
        </div>
      </div>
      <h1 className="mx-auto my-8 text-4xl font-bold text-primary max-w-7xl">Under Construction</h1>
      <section className="mx-auto my-8 max-w-7xl">
        <div className="space-y-4">
          <p>This page is currently under construction. Thank you for your patience as we get it ready.</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default SeasonalsPage;
