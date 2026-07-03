import Hero from '@/components/Hero';
import Leistungen from '@/components/Leistungen';
import About from '@/components/About';
import Process from '@/components/Process';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Leistungen />
      <About />
      <Process />
      <Contact />
    </main>
  );
}
