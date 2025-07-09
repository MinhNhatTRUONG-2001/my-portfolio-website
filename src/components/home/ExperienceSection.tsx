
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentor junior developers and architect system solutions.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL']
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Innovations Ltd.',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects, focusing on modern web technologies and best practices.',
    technologies: ['Vue.js', 'Python', 'Django', 'Docker', 'MySQL']
  },
  {
    title: 'Software Developer Intern',
    company: 'StartUp Hub',
    period: '2019 - 2020',
    description: 'Gained hands-on experience in software development lifecycle, participated in agile development processes.',
    technologies: ['JavaScript', 'HTML/CSS', 'Git', 'MongoDB']
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <CardTitle className="flex items-center mb-2 sm:mb-0">
                    <Briefcase className="mr-2 h-5 w-5 text-primary" />
                    {exp.title}
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-primary font-medium">{exp.company}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
