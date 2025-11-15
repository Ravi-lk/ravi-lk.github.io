import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const certificatesData = [
  {
    name: 'Offensive Security Certified Professional (OSCP)',
    issuer: 'Offensive Security',
    imageUrl: 'https://picsum.photos/seed/oscp/100/100',
    imageHint: 'OSCP badge',
  },
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    imageUrl: 'https://picsum.photos/seed/ceh/100/100',
    imageHint: 'CEH badge',
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    imageUrl: 'https://picsum.photos/seed/secplus/100/100',
    imageHint: 'Security+ badge',
  },
  {
    name: 'eLearnSecurity Junior Penetration Tester (eJPT)',
    issuer: 'INE Security',
    imageUrl: 'https://picsum.photos/seed/ejpt/100/100',
    imageHint: 'eJPT badge',
  },
];

const Certificates = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {certificatesData.map((cert) => (
        <Card key={cert.name} className="bg-card border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
            <div className="relative h-16 w-16 shrink-0">
                <Image
                    src={cert.imageUrl}
                    alt={`${cert.name} badge`}
                    width={100}
                    height={100}
                    data-ai-hint={cert.imageHint}
                    className="object-contain rounded-md"
                />
            </div>
            <div className="flex-grow">
              <CardTitle className="font-headline text-xl">{cert.name}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
             <CardDescription>{cert.issuer}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Certificates;
