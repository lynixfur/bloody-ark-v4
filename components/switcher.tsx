"use client"

import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import HomeHeader from './home-header';
import Navbar from './layout/navbar';

interface SwitcherProps {
  user?: any;
}

export default function Switcher({ user }: SwitcherProps) {
  const pathname = usePathname();

  // Check if the pathname starts with '/hub/' or is the root path '/'
  const isHubPath = pathname.startsWith('/hub');
  const isHomePath = pathname === '/';

  return (
    <>
      {!isHubPath && (
        <Navbar user={user} darken={isHomePath ? false : true} />
      )}
      {isHomePath && (
        <HomeHeader text="The perfect Ark: Survival Ascended experience. This server was established in 2017 and is still running strong as one of the biggest unofficial ark communities." />
      )}
    </>
  );
}
