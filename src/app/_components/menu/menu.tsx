'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from 'next/navigation';

import { useEffect, useState } from "react";

import { TabMenu } from "primereact/tabmenu";
import useTranslation from "next-translate/useTranslation";

export default function Menu() {

  const router = useRouter();
  const activePath = usePathname();
  const searchParams = useSearchParams();
  const currentlLanguage = searchParams.get('lang') === 'fr' ? 'fr' : 'en' ;
  const { t } = useTranslation('common');
 
  const [activeIndex, setActiveIndex] = useState(0);

  const pathsIndex = {
    home: 0,
    about: 1,
    settings: 2
  }

  const items = [
    {
      label: t("home"),
      icon: 'pi pi-home',
      command: () => {
        router.push(`/home?lang=${currentlLanguage}`);
      }
    },
    {
      label: t("aboutMe"),
      icon: 'pi pi-user',
      command: () => {
        router.push(`/about?lang=${currentlLanguage}`);
      }
    },
    {
      label: t("settings"),
      icon: 'pi pi-cog',
      command: () => {
        router.push(`/settings?lang=${currentlLanguage}`)
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
