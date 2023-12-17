import Link from 'next/link';
import { SVGProps } from 'react';
// import Link from 'next/link';

import { attributes as navigations } from '../../content/settings/navigation.md';

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/sandiagreenhouse/',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  const { footerNavigation } = navigations;

  return (
    <footer className="bg-primary text-light">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="mb-4 text-sm font-bold tracking-wider uppercase">Phone</h3>
                <p>(435) 628-1367</p>
              </div>

              <div className="mt-12 md:mt-0">
                <h3 className="mb-4 text-sm font-bold tracking-wider uppercase">Summer Hours</h3>
                <p>March 1st - August 31st</p>
                <p>Monday - Saturday: 8:00 AM – 6:00 PM </p>

                <h3 className="my-4 text-sm font-bold tracking-wider uppercase">Winter Hours</h3>
                <p>September 1st - February 28th</p>
                <p>Monday - Saturday: 8:00 AM – 5:00 PM </p>
              </div>

              <div className="mt-12 md:mt-0">
                <h3 className="mb-4 text-sm font-bold tracking-wider uppercase">Address</h3>
                <p>4234 South Washington Fields Road</p>
                <p>Washington, UT 84780</p>
                <p>USA</p>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <h3 className="mb-4 text-sm font-bold tracking-wider uppercase">Botanicals Family of Businessess</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
              <div>
                <a href="https://gibbyfloral.com" target="_blank" rel="noreferrer">
                  <img src="/assets/bfob/gibby-floral.png" alt="gibby floral" />
                </a>
              </div>
              <div>
                <a href="https://botanicalsdesign.com" target="_blank" rel="noreferrer">
                  <img src="/assets/bfob/botanicals.png" alt="botanicals" />
                </a>
              </div>
              <div>
                <Link href="/">
                  <a>
                    <img src="/assets/bfob/sandia.png" alt="sandia" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-light md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map(item => (
              <a key={item.name} href={item.href} className="text-light hover:text-light">
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-light md:mt-0 md:order-1">&copy; Sandia Greenhouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
