import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, Mail } from 'lucide-react';

const Hero = () => {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile');

  return (
    <section id="about" className="container mx-auto px-4 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tighter mb-4">
            Ravindu Lakmina
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-primary mb-8">
            Offensive Security Consultant
          </h2>
          <p className="max-w-2xl mx-auto md:mx-0 text-lg text-muted-foreground mb-10">
            A passionate cybersecurity professional with a knack for breaking and building. I specialize in identifying vulnerabilities before they're exploited, strengthening digital fortresses for clients across industries. My philosophy is simple: a proactive defense is the best offense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#projects">
                <ArrowDown className="mr-2 h-5 w-5" />
                View My Work
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              width={400}
              height={400}
              data-ai-hint={profileImage.imageHint}
              className="rounded-full object-cover border-4 border-primary shadow-2xl shadow-primary/20"
              priority
            />
          )}
           <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
