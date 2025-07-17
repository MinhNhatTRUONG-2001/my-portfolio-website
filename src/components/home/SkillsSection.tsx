
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Database, Cloud, Monitor, Server, Wrench } from 'lucide-react';

const technicalSkills = [
  {
    category: 'Frontend',
    icon: Monitor,
    skills: ['React', 'Angular', 'TypeScript', 'React Native', 'JavaScript', 'HTML5 & CSS3', 'Blazor WebAssembly', 'WPF', 'Android (Java)']
  },
  {
    category: 'Backend',
    icon: Server,
    skills: ['Node.js (Express.js, NestJS)', 'Python (Flask)', 'C#', 'ASP.NET Core (MVC, Web API)', 'EF Core', 'REST API', 'GraphQL', 'Java (Spring Boot)']
  },
  {
    category: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB', 'SQLite', 'Firebase']
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    skills: ['AWS', 'Azure', 'CI/CD (Azure DevOps, Netlify, Vercel)', 'Docker']
  },
  {
    category: 'Tools',
    icon: Wrench,
    skills: ['Jira', 'Confluence', 'Notion', 'Visual Studio', 'VS Code', 'IntelliJ', 'Linux & CLI', 'Git' , 'GitHub']
  }
];

const nonTechnicalSkills = [
  'Problem Solving',
  'Critical Thinking',
  'Project Management',
  'Agile/Scrum',
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and soft skills I've developed
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technicalSkills.map((skillGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader className="text-center">
                  <skillGroup.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full text-center"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Non-technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Non-technical Skills</h3>
          <Card className="max-w-4xl mx-auto animate-fade-in">
            <CardHeader className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {nonTechnicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 text-sm bg-accent/10 text-accent rounded-lg text-center font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
