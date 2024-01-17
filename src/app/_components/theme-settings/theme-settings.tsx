import { useFormik } from 'formik';

import { Skeleton } from "primereact/skeleton";
import { RadioButton } from 'primereact/radiobutton';

import { PrimeReactContext } from 'primereact/api';
import { useContext } from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function ThemeSettings() {

    let primeContext = useContext(PrimeReactContext);
    const { t } = useTranslation('settings');

    const radioBtns = [
        {
            id: 'light',
            name: t('lightTheme'),
            value: 'light',
            inputId: 'light' 
        },
        {
            id: 'dark',
            name: t('darkTheme'),
            value: 'dark',
            inputId: 'dark'
        }
    ]

    const formik = useFormik({
        initialValues: {
            item: 'light'
        },
        validate: (data) => {
            handleClick(data.item);
        },
        onSubmit: () => {}
    });

    const handleClick = (theme : string) => {
        const oldTheme = theme === 'dark' ? 'light' : 'dark';
        primeContext && primeContext.changeTheme && primeContext.changeTheme(`/themes/lara-${oldTheme}-blue/theme.css`, `/themes/lara-${theme}-blue/theme.css`, 'theme-link')
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <h3>{t('themeSettingsTitle')}</h3>
            <div className='mb-4'>{t('themeSettingsSubheading')}</div>
            <div className="grid grid-cols-2 grid-flow-col gap-5 sm:gap-12 ml-1">                    
                {radioBtns.map((btn) => {
                    return (
                        <div key={btn.value}>
                            <RadioButton
                                {...btn}
                                checked={formik.values.item === btn.value}
                                onChange={() => {
                                    formik.setFieldValue('item', btn.value);
                                }}
                            />
                            <label htmlFor={btn.inputId} className="ml-2">
                                {btn.name}
                            </label>
                            <div className="sm:w-4/5 mt-3">
                                <div className={"border-round py-3 rounded-t-lg " + (btn.id === 'dark' ? 'bg-slate-600' : 'border-1 surface-border bg-slate-200')}>
                                    <Skeleton
                                    height="2rem"
                                    width="100%"
                                    className={"mb-2 w-1/2 " + (btn.id === 'dark' ? 'bg-slate-800' : 'bg-slate-300')}
                                    ></Skeleton>
                                    <div className="grid grid-rows-2 grid-flow-col mt-3 mx-3">
                                    <Skeleton
                                        height="8rem"
                                        className={"hidden sm:block row-span-2 " + (btn.id === 'dark' ? 'bg-slate-800' : 'bg-slate-300')}
                                    ></Skeleton>
                                    <Skeleton
                                        shape="circle"
                                        height="4rem"
                                        className={"sm:hidden row-span-2 " + (btn.id === 'dark' ? 'bg-slate-800' : 'bg-slate-300')}
                                    ></Skeleton>
                                    <Skeleton
                                        className={"mt-1 ml-2 " + (btn.id === 'dark' ? 'bg-slate-800' : 'bg-slate-300') }
                                        height="sm:h-1"
                                    ></Skeleton>
                                    <Skeleton
                                        className={"mt-2 ml-2 " + (btn.id === 'dark' ? 'bg-slate-800' : 'bg-slate-300')}
                                        height="sm:h-1"
                                    ></Skeleton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </form>    
    )
}