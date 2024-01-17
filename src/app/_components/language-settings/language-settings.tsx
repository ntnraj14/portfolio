'use client'

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Dropdown } from 'primereact/dropdown';

import useTranslation from 'next-translate/useTranslation';


type Language = {
    name: string;
    code: string;
}

export default function LanguageSettings() {

    const { t } = useTranslation('settings');
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentlLanguage = searchParams.get('lang');
    let languages = [
        { name: t('english'), code: 'en' },
        { name: t('french'), code: 'fr' }
    ];
    const [selectedLanguage, setSelectedLanguage] = useState(getDefaultLanguage(currentlLanguage || ''));

    const updateSelectedLanguage = (e: any) => {
       const language = getDefaultLanguage(e.value.code);
       router.push(`settings?lang=${e.value.code}`);
       setSelectedLanguage(language);
    }

    function getDefaultLanguage(langFromParams: string) {
        const languageOptions = langFromParams === 'en' ? [{name: 'English', code: 'en'}, {name: 'French', code: 'fr'}] : [{name: 'Anglais', code: 'en'}, {name: 'Français', code: 'fr'}];
        languages = languageOptions;
        const userSelectedLanguage = languageOptions.filter(item => item.code === langFromParams);
        return userSelectedLanguage[0];
    }

    return (
        <>
            <h3 className='mt-7'>{t('languageSettingsTitle')}</h3>
            <div className='mb-4'>{t('languageSettingsSubheading')}</div>
            <Dropdown value={selectedLanguage} onChange={(e) => updateSelectedLanguage(e)} options={languages} optionLabel="name" placeholder="Select a Language" 
                filter className="w-full md:w-14rem" />
        </>
    )

}