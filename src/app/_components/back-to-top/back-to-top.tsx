import { useEffect, useRef } from "react";

export default function BackToTop () {

    const backToTopElementRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (backToTopElementRef.current) {
                if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
                    backToTopElementRef.current.style.opacity = '1';
                  } else {
                    backToTopElementRef.current.style.opacity = '0';
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const handleScrollToTopClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

    return (
        <div ref={backToTopElementRef} onClick={handleScrollToTopClick} className="progress-circle-container text-cyan-blue absolute bottom-10 right-20">
            <span><i className="pi pi-chevron-circle-up" style={{ fontSize: '2.5rem' }}></i></span>
        </div>
    )
}