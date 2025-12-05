import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';


const Index = () => {
    return (
        <div className='min-h-screen bg-background'>
            <Hero />
            <About />
            <Projects />
        </div>
    );
};

export default Index;