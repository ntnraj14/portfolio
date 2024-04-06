'use client'

import Link from "next/link";
import { useRef } from "react";

export default function Header() {

  const welcomeBanner = useRef<HTMLInputElement>(null);

  const hideBanner = () => {
    if (welcomeBanner.current) {
      welcomeBanner.current.style.display = 'None';
    }
  }

  return (
    <div className="text-center text-white bg-primary-color -mt-2 -mx-2 p-1" ref={welcomeBanner}>
      <span>Welcome to <Link target="_blank" href="/"><b className="text-white underline cursor-pointer">NTNRAJ14.COM</b></Link>. I'm thrilled to have you here. </span>
      <span onClick={hideBanner} className="pi pi-times float-right pr-3 hidden sm:inline"></span>
    </div>
  )

}
