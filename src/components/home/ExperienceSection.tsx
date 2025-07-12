
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'RunUp.',
    period: 'Dec 2024 - May 2025',
    description: '· Design PostgreSQL database & develop REST API server using ASP.NET Core Web API. \
    \n· Implement some UI components in React and support connecting client requests to the server. \
    \n· Deploy both server & client applications to the Internet with a paid domain (for the client). \
    \n· Manage tasks in the application development team.',
    technologies: ['C#', 'ASP.NET', 'TypeScript', 'React', 'PostgreSQL', 'Visual Studio', 'VS Code', 'Azure DevOps']
  },
  {
    title: 'Software Developer Intern',
    company: 'proceedit',
    period: 'May 2023 - Oct 2023',
    description: '· Develop small Python, Flask & GraphQL applications for automation tasks on AWS virtual machines. \
    \n· Convert some parts of large applications into microservices. \
    \n· Maintain PostgreSQL tables and views as well as Google Sheets tabs.',
    technologies: ['Python', 'Flask', 'GraphQL', 'PostgreSQL', 'AWS', 'Linux', 'VS Code', 'GitHub', 'Jira', 'Confluence']
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
                <p className="mb-4 whitespace-pre-line">{exp.description}</p>
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
