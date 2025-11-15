
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Services from '@/components/sections/services';
import Certificates from '@/components/sections/certificates';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section id="skills" className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-center mb-12 text-primary">
              My Arsenal
            </h2>
            <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-16 text-lg">
              A collection of tools and technologies I wield to secure digital landscapes, from deep-dive penetration testing to robust incident response.
            </p>
            <Skills />
          </div>
        </section>
        <section id="services" className="py-20 lg:py-32 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-center mb-12 text-primary">
              Services Offered
            </h2>
            <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-16 text-lg">
              Leveraging expertise to provide comprehensive security solutions tailored to your needs.
            </p>
            <Services />
          </div>
        </section>
        <section id="certificates" className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-center mb-12 text-primary">
              Certifications & Credentials
            </h2>
            <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-16 text-lg">
              A testament to my commitment to continuous learning and staying at the forefront of the cybersecurity field.
            </p>
            <Certificates />
          </div>
        </section>
        <section id="contact" className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-center mb-12 text-primary">
              Connect
            </h2>
            <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-16 text-lg">
              Have a project, a question, or just want to connect? Send an email or find me on social media.
            </p>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
