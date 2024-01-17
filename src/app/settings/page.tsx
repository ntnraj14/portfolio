"use client"

import useTranslation from 'next-translate/useTranslation';

import ThemeSettings from '../_components/theme-settings/theme-settings';
import LanguageSettings from '../_components/language-settings/language-settings';

export default function Settings() {

    const { t } = useTranslation();

  return (
    <div className="mx-3 sm:mx-auto mt-4 sm:w-2/5">
        <div>{t('hi')}</div>
        <ThemeSettings></ThemeSettings>
        <LanguageSettings></LanguageSettings>
    </div>
  )

}
