'use client'

import useTranslation from 'next-translate/useTranslation';
import { isUserUsingMobile }  from '../_lib/utilities';

export default function About() {

    const { t } = useTranslation('about');

    const contactMe = () => {
        if (!isUserUsingMobile()) {
            window.location.href = `mailto:ntnraj14@gmail.com?subject=Invitation to Connect&body=Hi Nitin,%0D%0A %0D%0AI want to connnect with you.%0D%0A %0D%0ARegards,` // todo body
        } else {
            window.location.href = `document.location.href = "tel:+919074247127";`
        }
    }
  
    return (
        <div className="ml-4 sm:w-1/2 w-11/12 mt-5"> {t('aboutMePara1')} <p>{t('aboutMePara2')}</p>
            <p>{t('aboutMePara3')} <b className="text-primary-color cursor-pointer" onClick={() => contactMe()}>
                {t('clickAway')}!</b>
            </p>
        </div>
    );
  }
  