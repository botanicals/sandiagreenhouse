import Link from 'next/link';

import { attributes as global } from '../../content/settings/global.md';
import { attributes as navigation } from '../../content/settings/navigation.md';

type NavigationItem = {
  path: string;
  name: string;
};

const Header = () => {
  const { siteTitle } = global;
  const { headerNavigation } = navigation;

  return (
    <header className="bg-primary text-light">
      <div className="flex flex-col justify-between mx-auto sm:flex-row max-w-7xl">
        <div className="self-center p-4 sm:self-start">
          <Link href="/">
            <a>
              <img className="w-auto h-16" src="/assets/sandia.png" alt="Sandia Greenhouse" />
            </a>
          </Link>
        </div>
        <nav className="flex items-center self-center mt-4 mb-8 sm:mb-0 sm:mt-0">
          <ul className="flex space-x-2 font-medium">
            {(headerNavigation as NavigationItem[]).map(item => (
              <li key={item.path} className="px-4 py-1 rounded-3xl hover:bg-light hover:text-primary">
                <Link href={`/${item.path}`}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
