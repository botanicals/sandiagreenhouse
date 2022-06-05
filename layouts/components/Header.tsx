import { Fragment } from 'react';
import Link from 'next/link';

import { Popover, Transition } from '@headlessui/react';
import { ChartBarIcon, CursorClickIcon, DocumentReportIcon, MenuIcon, RefreshIcon, ShieldCheckIcon, ViewGridIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { attributes as global } from '../../content/settings/global.md';
import { attributes as navigation } from '../../content/settings/navigation.md';

import classNames from '../../utils/class-names';

const Header = () => {
  const { siteTitle } = global;
  const { headerNavigation } = navigation;

  return (
    <header className="bg-primary text-light">
      <div className="flex justify-between mx-auto max-w-7xl">
        <div className="p-4">
          <Link href="/">
            <a>
              <img className="w-auto h-16" src="/assets/sandia.png" alt="Sandia Greenhouse" />
            </a>
          </Link>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-2 font-medium">
            <li className="px-4 py-1 rounded-3xl hover:bg-light hover:text-primary">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="px-4 py-1 rounded-3xl hover:bg-light hover:text-primary">
              <Link href="/pricelist">
                <a>Pricelist</a>
              </Link>
            </li>
            <li className="px-4 py-1 rounded-3xl hover:bg-light hover:text-primary">
              <Link href="/seasonals">
                <a>Seasonals</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
