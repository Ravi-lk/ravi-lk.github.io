import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const certificatesData = [
  {
    id: 'oscp',
    name: 'Offensive Security Certified Professional (OSCP)',
    issuer: 'Offensive Security',
  },
  {
    id: 'ceh',
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
  },
  {
    id: 'comptia',
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
  },
  {
    id: 'ejpt',
    name: 'eLearnSecurity Junior Penetration Tester (eJPT)',
    issuer: 'INE Security',
  },
];

const Certificates = () => {
  const certificateImages = PlaceHolderImages.filter(p => certificatesData.some(c => c.id === p.id));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {certificatesData.map((cert) => {
        const image = certificateImages.find(img => img.id === cert.id);
        return (
            <Card key={cert.name} className="bg-card border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                {image && (
                  <Image 
                    src={image.imageUrl} 
                    alt={`${cert.name} badge`} 
                    width={50} 
                    height={50} 
                    data-ai-hint={image.imageHint}
                    className="rounded-md"
                  />
                )}
                <div className="flex-grow">
                  <CardTitle className="font-headline text-xl">{cert.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardContent>
            </Card>
        )
      })}
    </div>
  );
};

export default Certificates;
