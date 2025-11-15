import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Bug, Cloud, Code, Network, ShieldCheck } from 'lucide-react';

const skillsData = [
  {
    category: 'Penetration Testing',
    icon: Bug,
    skills: [
      { name: 'Web Application', level: 95 },
      { name: 'Network Services', level: 90 },
      { name: 'Mobile Application', level: 80 },
      { name: 'Social Engineering', level: 85 },
    ],
  },
  {
    category: 'Security Tools',
    icon: ShieldCheck,
    skills: [
      { name: 'Burp Suite', level: 95 },
      { name: 'Nmap', level: 90 },
      { name: 'Metasploit', level: 85 },
      { name: 'Wireshark', level: 80 },
    ],
  },
  {
    category: 'Cloud Security',
    icon: Cloud,
    skills: [
      { name: 'AWS Security', level: 80 },
      { name: 'Azure Security', level: 75 },
      { name: 'GCP Security', level: 70 },
      { name: 'Container Security', level: 85 },
    ],
  },
  {
    category: 'Programming & Scripting',
    icon: Code,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Bash', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'Go', level: 70 },
    ],
  },
];

const SkillItem = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <p className="text-sm font-medium text-foreground">{name}</p>
      <p className="text-sm text-primary">{level}%</p>
    </div>
    <Progress value={level} className="h-2" />
  </div>
);

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skillsData.map((category) => (
        <Card key={category.category} className="bg-card border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <category.icon className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl">{category.category}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {category.skills.map((skill) => (
              <SkillItem key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Skills;
