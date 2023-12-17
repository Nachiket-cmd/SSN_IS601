import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { Image } from 'primereact/image';
import Nav from '@/component/nav';
import Footer from '@/component/footer';
import styles from '@/styles/about.module.css';

export default function About() {
    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const contactUsRef = useRef(null);
    const router = useRouter();

    const onMenuClick = (sectionId) => {
        switch (sectionId) {
            case 'home':
              router.push('/').then(() => homeRef?.current?.scrollIntoView({ behavior: 'smooth' }));
                break;
            case 'about':
                router.push('/about');
                break;
            case 'services':
              router.pathname !== '/'
              ? router.push('/').then(() => servicesRef?.current?.scrollIntoView({ behavior: 'smooth' }))
              : servicesRef?.current?.scrollIntoView({ behavior: 'smooth' });
            break;
            case 'contact-us':  
                contactUsRef?.current?.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    };
    
    return (
        <>
            <div className='overflow-x-hidden'>
                <div className={styles.backgroundFrame}>
                    <Nav onMenuClick={onMenuClick} />
                </div>

                <div id='AboutPageContainer' className="grid nested-grid mt-8">
                    <div id='leftSectionContainer' className="col-5 col-offset-1">
                        <div className="grid">
                            <div id='leftHeaderContainer' className="col-6 mt-4">
                                    <p id='aboutTitle'>Hello ! Welcome to</p>
                                    <h1 id='aboutSiteName'>Razor Edge</h1>
                            </div>
                            <div id='leftHeaderContent' className="col-12 -mt-4">
                                <p id='aboutContent'>Where your hair journey meets our masterful artistry !!</p>
                                <p id='aboutContent'>Embracing the hero within yourself, we transform styles with precision and flair.  Here, each snip and style is an epic adventure, crafting bold, empowering looks.  Join us, and unleash the hero within through every cut & colour.</p>
                            </div>
                        </div>
                        
                        <div id='storySectionContainer' className={`grid mt-1`}>
                            <div id='storyImage' className={`col-4 mt-6`}>
                                <Image id='storyRelatedImage' src='/story-img.png' alt='story-img' className=''/>
                            </div>
                            <div id='storyContentContainer' className={`col-8`}>
                                <p id='storyTitle' className={`text-yellow-200 text-2xl {styles.storyHeading}`}>Our Story</p>
                                <p id='storySubTitle' className={styles.storySubHeading}>Nurturing Beauty, Empowering Confidence</p>
                                <p id='storyContext' className={`font-light	${styles.storyContent}`}>From humble beginnings to becoming a haven for beauty enthusiasts, our story is woven with passion, dedication, and a commitment to empowering individuals through self-expression.</p>
                            </div>
                        </div>
                        
                        <div id='visionSectionContainer' className="grid ">
                            <div id='visionContentContainer' className={`col-8 `}>
                                <p id='visionTitle' className={`text-yellow-200 text-2xl ${styles.visionHeading}`}>Our Vision</p>
                                <p id='visionSubTitle' className={styles.visionSubHeading}>Elevating Beauty Beyond Asthetics</p>
                                <p id='visionContext' className={`font-light ${styles.visionContent}`}>We believe in transformative experiences that go beyond aesthetics, fostering self-love and confidence. Our commitment is to redefine beauty standards and inspire individuals to embrace their uniqueness.</p>
                            </div>
                            <div id='visionImage' className={`col-4 mt-7`}>
                                <Image id='visionRelatedImage' src='/vision-img.png' alt='vision-img' className=''/>
                            </div>
                        </div>   
                    </div>
                    
                    <div id='rightSectionContainer' className=" col-4 mt-7 border-round-sm h-full">
                        <Image id='rightSectionImage' src='/about-img.png' alt='about-img' className={`${styles.rightSectionImg}`}/>
                    </div>
                </div>
                <div id='footerSection' ref={contactUsRef}><Footer/></div>
            </div>
        </>
    )
}