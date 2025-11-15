
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const skillsList = [
  'Web Application Pentesting',
  'Network Pentesting',
  'Mobile Pentesting',
  'Social Engineering',
  'Burp Suite',
  'Nmap',
  'Metasploit',
  'Wireshark',
  'AWS Security',
  'Azure Security',
  'Container Security',
  'Python',
  'Bash Scripting',
  'JavaScript',
  'Go',
];

const Skills = () => {
  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-wrap justify-center gap-3">
          {skillsList.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="text-base md:text-lg px-4 py-2 font-medium transition-all hover:bg-primary/20 hover:text-primary"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
