"use client"

import { usePathname } from 'next/navigation'; // Import usePathname from next/router
import HomeHeader from './home-header';
import Navbar from './layout/navbar';

interface SwitcherProps {
  user?: any;
}

export default function Switcher({ user }: SwitcherProps) {
  const pathname = usePathname();

  return (
    <>
      {pathname === '/' ? (
        <div className="flex flex-col h-screen">
          <Navbar user={user} darken={false} />
          <HomeHeader text="The perfect Ark: Survival Ascended experience. This server was established in 2017 and is still running strong as one of the biggest unofficial ark communities." />
        </div>
      ) : (
        <Navbar user={user} darken={true} />
      )}
    </>
  );
}
