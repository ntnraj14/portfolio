"use client";

import ThemeSettings from '../_components/theme-settings/theme-settings';
import LanguageSettings from '../_components/language-settings/language-settings';

export default function Settings() {

  return (
    <div className="mx-3 sm:mx-auto mt-4 sm:w-2/5">
        <ThemeSettings></ThemeSettings>
        <LanguageSettings></LanguageSettings>
    </div>
  )

}
