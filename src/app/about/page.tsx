'use client'

import { isUserUsingMobile }  from '../_lib/utilities';

export default function About() {

    const contactMe = () => {
        if (!isUserUsingMobile()) {
            window.location.href = `mailto:ntnraj14@gmail.com?subject=Invitation to Connect&body=Hi Nitin,%0D%0A %0D%0AI want to connnect with you.%0D%0A %0D%0ARegards,` // todo body
        } else {
            window.location.href = `document.location.href = "tel:+919074247127";`
        }
    }
  
    return (
        <div className="ml-4 sm:w-1/2 w-11/12 mt-5">
            My name is Nitin Rajput, and this space is a curated collection of my creative journey, projects, and achievements.
            <p>Whether you're an employer, a collaborator, or simply an enthusiast exploring, I invite you to delve into my work. Feel free to roam around, explore my projects, 
                and get a glimpse of what drives my enthusiasm.</p>
            <p>Thank you for visiting. If you have any questions, collaboration ideas, or just want to say hello, I'm only a <b 
            className="text-primary-color cursor-pointer" onClick={() => contactMe()}>
                click away!</b>
                </p>
        </div>
    );
  }
  