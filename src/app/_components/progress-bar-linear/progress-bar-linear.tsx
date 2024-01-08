import { useRef } from 'react';
import { useEffect } from 'react';

import progressbarLinearStyles from './progress-bar-linear.module.scss';

export default function ProgressBarLinear() {

    const progressBarElementRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleScroll = () => {
          const totalHeight = document.body.scrollHeight - window.innerHeight;
          const progress = (window.pageYOffset / totalHeight) * 100;
          if(progressBarElementRef.current) {
              progressBarElementRef.current.style.width = progress + '%';
          }   
        };

        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div>
            <div ref={progressBarElementRef} className={progressbarLinearStyles['progress-bar-container']}>
                <div className={progressbarLinearStyles['progress-bar']}></div>
            </div>
        </div>
    )
}