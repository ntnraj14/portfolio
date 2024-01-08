'use client'

import { PrimeReactProvider } from 'primereact/api';
import { Carousel } from 'primereact/carousel';

import React, { useState } from 'react';
import Image from 'next/image';

import { ProductService } from './lib/service/product-service';

import { Tproduct, TcarouselEvent } from './home.type';
import ProgressBarLinear from '../_components/progress-bar-linear/progress-bar-linear';
import BackToTop from '../_components/back-to-top/back-to-top';

export default function Home() {

  const products = ProductService.getProductsData();
  const [imageIndex, setImageIndex] = useState(0);

  const productTemplate = (product: Tproduct) => {
      return (
          <div className="border-1 surface-border border-round m-2 text-center">
              <div>
                  <Image src={product.image} alt={product.name} className="shadow-2" width="400" height="400" />
              </div>
          </div>
      );
  };

  const changeEvent = (event: TcarouselEvent) => {
    setImageIndex(event.page);
  }

  return (
    <div>
        <ProgressBarLinear></ProgressBarLinear>
        <div  className='flex'>
            <PrimeReactProvider>    
                <Carousel value={products} numVisible={1} numScroll={1} className="custom-carousel w-1/4 h-1/4" circular
                autoplayInterval={5000} itemTemplate={productTemplate} showNavigators={false} onPageChange={changeEvent}/>
            </PrimeReactProvider>
            {products[imageIndex] && 
                <div className='ml-5 my-auto'>
                    <div className='font-bold text-2xl'>{products[imageIndex]['name']}</div>
                    <div className='mt-2 text-slate-500 w-1/2'>{products[imageIndex]['description']}</div>
                </div>
            }
        </div>
        <BackToTop></BackToTop>
    </div>
  )
}
