import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

const certificatesData = [
  {
    name: 'Offensive Security Certified Professional (OSCP)',
    issuer: 'Offensive Security',
  },
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
  },
  {
    name: 'eLearnSecurity Junior Penetration Tester (eJPT)',
    issuer: 'INE Security',
  },
];

const Certificates = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {certificatesData.map((cert) => (
        <Card key={cert.name} className="bg-card border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
            <Award className="h-8 w-8 text-primary" />
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
