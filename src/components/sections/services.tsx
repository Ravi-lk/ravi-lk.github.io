
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ShieldCheck, Bug, Server, Code, Shield, Wifi, FileCode } from 'lucide-react';

const servicesData = [
  {
    icon: Bug,
    title: 'Penetration Testing',
    description: 'Simulating real-world attacks (web, network, mobile) to test the strength of your defenses and provide actionable remediation advice.',
  },
  {
    icon: ShieldCheck,
    title: 'Vulnerability Assessment',
    description: 'Comprehensive scans and analysis to identify security weaknesses in your applications and infrastructure before attackers do.',
  },
  {
    icon: Server,
    title: 'Red Teaming',
    description: 'Objective-based adversary simulation to test your organization\'s overall security posture and incident response capabilities.',
  },
  {
    icon: Code,
    title: 'Secure Code Review',
    description: 'In-depth analysis of source code to find security flaws. Includes Static Application Security Testing (SAST), Dynamic Application Security Testing (DAST), and Software Composition Analysis (SCA).',
  },
  {
    icon: Shield,
    title: 'Security Consulting',
    description: 'Providing expert advice to help you build and maintain a robust security program, from policy development to architectural reviews.',
  },
  {
    icon: Wifi,
    title: 'Wireless Security Audits',
    description: 'Assessing your wireless networks for vulnerabilities and ensuring they are configured securely to prevent unauthorized access.',
  },
  {
    icon: FileCode,
    title: 'Application Security Consulting',
    description: 'Holistic security guidance throughout the software development lifecycle (SDLC) to build secure applications from the ground up.',
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
