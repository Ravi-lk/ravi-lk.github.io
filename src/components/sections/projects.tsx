import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projectsData = [
  {
    id: 'project-1',
    title: 'Enterprise Vulnerability Scanner',
    description: 'Developed a custom, scalable vulnerability scanning platform for a large enterprise, integrating with existing CI/CD pipelines to provide real-time security feedback.',
    technologies: ['Python', 'Django', 'Celery', 'Docker', 'AWS'],
    link: '#',
  },
  {
    id: 'project-2',
    title: 'Red Team Operations Framework',
    description: 'Designed and built an internal framework to streamline red team engagements, automating reconnaissance, payload generation, and reporting.',
    technologies: ['Go', 'PostgreSQL', 'React', 'gRPC'],
    link: '#',
  },
  {
    id: 'project-3',
    title: 'Cloud Security Posture Management',
    description: 'A tool to continuously monitor cloud environments (AWS, Azure) for misconfigurations and compliance violations against CIS benchmarks.',
    technologies: ['Python', 'Terraform', 'Serverless', 'GCP'],
    link: '#',
  },
  {
    id: 'project-4',
    title: 'Phishing Simulation & Training',
    description: 'Created a comprehensive phishing simulation platform to train employees, track campaign results, and improve organizational security awareness.',
    technologies: ['React', 'Node.js', 'SendGrid API', 'MongoDB'],
    link: '#',
  },
];

const Projects = () => {
  const projectImages = new Map(PlaceHolderImages.map(p => [p.id, p]));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projectsData.map((project) => {
        const image = projectImages.get(project.id);
        return (
          <Card key={project.title} className="flex flex-col overflow-hidden group transition-all duration-300 hover:border-primary/80 hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-1">
            <CardHeader className="p-0">
              {image && (
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    data-ai-hint={image.imageHint}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
            </CardHeader>
            <div className="flex flex-col flex-grow p-6">
              <CardTitle className="font-headline text-2xl mb-2 flex justify-between items-start">
                {project.title}
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </CardTitle>
              <CardDescription className="flex-grow">{project.description}</CardDescription>
              <CardFooter className="p-0 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-normal">{tech}</Badge>
                  ))}
                </div>
              </CardFooter>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Projects;
