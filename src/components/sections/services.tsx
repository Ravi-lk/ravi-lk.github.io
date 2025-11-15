
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ShieldCheck, Bug, Server, Code } from 'lucide-react';

const servicesData = [
  {
    icon: ShieldCheck,
    title: 'Vulnerability Assessment',
    description: 'Comprehensive scans and analysis to identify security weaknesses in your applications and infrastructure before attackers do.',
  },
  {
    icon: Bug,
    title: 'Penetration Testing',
    description: 'Simulating real-world attacks (web, network, mobile) to test the strength of your defenses and provide actionable remediation advice.',
  },
  {
    icon: Server,
    title: 'Red Teaming',
    description: 'Objective-based adversary simulation to test your organization\'s overall security posture and incident response capabilities.',
  },
  {
    icon: Code,
    title: 'Secure Code Review',
    description: 'In-depth analysis of your source code to find security flaws and logic errors, ensuring a secure development lifecycle.',
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {servicesData.map((service) => (
        <Card key={service.title} className="flex flex-col bg-card border-border hover:border-primary/80 hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-1 transition-all duration-300">
          <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
            <service.icon className="w-10 h-10 text-primary shrink-0" />
            <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>{service.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Services;
