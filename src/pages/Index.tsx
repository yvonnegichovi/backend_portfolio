import { useCallback, useState } from 'react';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import InitialTransition from '@/components/InitialTransition';
import { DrawGradients } from '@/components/DrawPath';


const Index = () => {
    const [showIntro, setShowIntro] = useState(true);
    const handleIntroComplete = useCallback(() => setShowIntro(false), []);

    return (
        <div className='min-h-screen bg-background'>
            {showIntro && <InitialTransition onComplete={handleIntroComplete} />}
            <DrawGradients />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;