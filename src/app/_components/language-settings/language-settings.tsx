import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

import { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions } from 'primereact/api';

type Language = {
    name: string;
    code: string;
}

export default function LanguageSettings() {

    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const countries = [
        { name: 'English', code: 'en' },
        { name: 'French', code: 'fr' }
    ];

    const selectedLanguageTemplate = (option: Language, props: any) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const languageOptionTemplate = (option: Language) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const updateSelectedLanguage = (e: any) => {
       console.log(e)
       setSelectedLanguage(e.value);
       locale(e.value.code);
    }

    return (
        <>
            <h3 className='mt-7'>Language Settings</h3>
            <div className='mb-4'>
                Choosing your preferred language ensures that you can navigate, communicate, and engage with content in a way that feels most comfortable for you.
            </div>
            <Dropdown value={selectedLanguage} onChange={(e) => updateSelectedLanguage(e)} options={countries} optionLabel="name" placeholder="Select a Language" 
                filter valueTemplate={selectedLanguageTemplate} itemTemplate={languageOptionTemplate} className="w-full md:w-14rem" />
        </>     
    )

}