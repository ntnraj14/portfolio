'use client'

import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

import { useEffect, useState } from "react";

import { TabMenu } from "primereact/tabmenu";

export default function Menu() {

  const router = useRouter();
  const activePath = usePathname();

  const [activeIndex, setActiveIndex] = useState(0);

  const pathsIndex = {
    home: 0,
    about: 1,
    settings: 2
  }

  const items = [
    {
      label: "Home",
      icon: 'pi pi-home',
      command: () => {
        router.push('/home');
      }
    },
    {
      label: "About Me",
      icon: 'pi pi-user',
      command: () => {
        router.push('/about');
      }
    },
    {
      label: "Settings",
      icon: 'pi pi-cog',
      command: () => {
        router.push('/settings')
      }
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const slicedPath = activePath.slice(1);
    setActiveIndex(pathsIndex[slicedPath as keyof typeof pathsIndex])
  }, [activePath]);
  
  return <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className="text-sm sm:text-base"/>;
}
