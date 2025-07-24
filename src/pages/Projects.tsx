
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Code } from 'lucide-react';

const allProjects = [
  {
    title: 'Hangman Game',
    description: 'A classic word-guessing game where players try to guess a hidden English word within a certain number of guesses. The game includes hundreds of words from different topics.',
    technologies: ['TypeScript', 'NestJS', 'Angular', 'Prisma', 'MongoDB'],
    code: [
      {url: 'https://github.com/MinhNhatTRUONG-2001/HangmanServer', label: 'Server'},
      {url: 'https://github.com/MinhNhatTRUONG-2001/HangmanClient', label: 'Client'},
    ],
    website: 'https://hangman-client.vercel.app/',
    video: 'https://www.youtube.com/watch?v=m_QfnsvYJRw',
    image: 'https://github.com/user-attachments/assets/6f5e0d7c-5144-4e39-a1ff-5bb79664bff1'
  },
  {
    title: 'Tournament Management',
    description: 'A mobile application designed for managing tournaments, including features for team registration, match scheduling, and real-time updates and calculations. The supprorted tournament formats are Round Robin and Single Elimination.',
    technologies: ['Python', 'Flask', 'C#', 'ASP.NET', 'JWT', 'React Native', 'Expo', 'PostgreSQL'],
    code: [
      {url: 'https://github.com/MinhNhatTRUONG-2001/tournament-app-auth-server', label: 'Auth Server'},
      {url: 'https://github.com/MinhNhatTRUONG-2001/tournament-app-server', label: 'Data Server'},
      {url: 'https://github.com/MinhNhatTRUONG-2001/tournament-app-client', label: 'Client'},
    ],
    website: null,
    video: 'https://www.youtube.com/watch?v=PRxfJTVWaaw',
    image: 'https://drive.google.com/thumbnail?id=1sJhQJu26w1cxDC7YCcRrf9sljbB_mj0y&sz=w1000'
  },
  {
    title: 'Ekseli Spreadsheet',
    description: 'The project description can be read by clicking the "Code" button below, then going to Overview > Summary in the Azure DevOps project.',
    technologies: ['React', 'TypeScript', 'DevExtreme', 'SPARQL'],
    code: [
      {url: 'https://dev.azure.com/e2000606/_git/SEP2023%20-%20Ekseli%201%20Spreadsheet', label: null},
    ],
    website: null,
    video: 'https://www.youtube.com/watch?v=7fK3-RTNm1g',
    image: 'https://drive.google.com/thumbnail?id=1B2S2eADz875OulgB6t7gokikfOGJvQEc&sz=w1000'
  },
  {
    title: 'The Quotes',
    description: 'A .NET web application for sharing and reading quotes across users. In the application, users can post any quote that they think it is thought-provoking and interesting. They can also browse and search for quotes posted by other users and save them in their favourite list.',
    technologies: ['C#', 'ASP.NET', 'EF Core', 'PostgreSQL', 'Blazor WebAssembly'],
    code: [
      {url: 'https://github.com/MinhNhatTRUONG-2001/TheQuotes', label: null},
    ],
    website: 'https://mango-sea-01ee22003.6.azurestaticapps.net/',
    video: 'https://www.youtube.com/watch?v=VRGxnK3Gh9I',
    image: 'https://drive.google.com/thumbnail?id=17WZnQUk6b6ItRkHXAFvBuWMyvS-VbZeq&sz=w1000'
  },
  {
      title: 'Group Divisor',
      description: 'This application can divide a large number of people into groups of 3-5 members (preferably 4 memebers).',
      technologies: ['C#', 'WPF'],
      code: [
        {url: 'https://github.com/MinhNhatTRUONG-2001/GroupDivisor', label: null},
      ],
      website: null,
      video: null,
      image: 'https://drive.google.com/thumbnail?id=1kvwGaUUKLI2tw0m4BqUBS8RQ10lFR-D3&sz=w1000'
    },
    {
      title: 'Bookstore',
      description: 'A small bookstore project for handling book data using Firebase database and React.',
      technologies: ['JavaScript', 'React', 'Firebase'],
      code: [
        {url: 'https://github.com/MinhNhatTRUONG-2001/reactjs-firebase-bookstore', label: null},
      ],
      website: 'https://minhnhattruong-2001.github.io/reactjs-firebase-bookstore/',
      video: null,
      image: 'https://drive.google.com/thumbnail?id=18pr3-RZ8lzeAo-BZmCbK1F-91ICg-pi4&sz=w1000'
    },
    {
      title: 'GraphQL Library Management',
      description: 'A library management system for managing books and authors using GraphQL. The project is in the 2023 GraphQL course on fullstackopen.com, conducted by the University of Helsinki.',
      technologies: ['JavaScript', 'React', 'GraphQL', 'Apollo', 'Node.js', 'MongoDB', 'JWT'],
      code: [
        {url: 'https://github.com/MinhNhatTRUONG-2001/graphql-library-server', label: 'Server'},
        {url: 'https://github.com/MinhNhatTRUONG-2001/graphql-library-client', label: 'Client'},
      ],
      website: null,
      video: null,
      image: 'https://drive.google.com/thumbnail?id=1s2M6WlApQECCcrkJe1eSuh5JTtrEHZig&sz=w1000'
    },
    {
      title: 'Meeting Calendar',
      description: 'An Android application for managing meetings, allowing users to create, view, and manage their meeting schedules.',
      technologies: ['Android', 'Java', 'SQLite'],
      code: [
        {url: 'https://github.com/MinhNhatTRUONG-2001/AndroidMeetingCalendar', label: null},
      ],
      website: null,
      video: 'https://www.youtube.com/watch?v=vB3VFOC-WdI',
      image: 'https://drive.google.com/thumbnail?id=14-aulojPc35QPXlt0fTUVkR4G7ORrGRx&sz=w1000'
    },
    {
      title: 'Calculator',
      description: 'A simple Android calculator application that performs basic arithmetic operations.',
      technologies: ['Android', 'Java'],
      code: [
        {url: 'https://github.com/MinhNhatTRUONG-2001/AndroidCalculator', label: null},
      ],
      website: null,
      video: 'https://www.youtube.com/shorts/1pct9mn9yis',
      image: 'https://github.com/user-attachments/assets/5302488a-b7b0-4e75-bba4-c3545b3dbfe6'
    },
    {
      title: 'SCM Simulator',
      description: 'A web tool for maintaining supply chain simulation data such as trucks, orders and locations. The project is simple because it is mainly used for studying software engineering practices, DevOps and CI/CD.',
      technologies: ['Java', 'Spring Boot', 'MariaDB', 'REST API', 'React', 'TypeScript', 'Material UI'],
      code: [
        {url: 'https://github.com/MinhNhatTRUONG-2001/graphql-library-server', label: 'Server'},
        {url: 'https://github.com/MinhNhatTRUONG-2001/graphql-library-client', label: 'Client'},
      ],
      website: null,
      video: null,
      image: null
    },
    {
      title: 'oPhone',
      description: 'Just a design of a mobile phone online store using pure HTML and CSS.',
      technologies: ['HTML', 'CSS'],
      code: [
        {url: 'https://github.com/MinhNhatTRUONG-2001/CSS_oPhone', label: null},
      ],
      website: 'https://minhnhattruong-2001.github.io/CSS_oPhone/',
      video: null,
      image: 'https://drive.google.com/thumbnail?id=1ph9-0RSO_mhFKyGKJEnRYV9HD6ylWA4K&sz=w1000'
    },
];

const Projects = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive showcase of my software development work, from web applications 
              to mobile apps and AI systems. Each project demonstrates different technical skills 
              and problem-solving approaches.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-fade-in group">
                {/* Project Image/Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg">
                {project.image &&
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                }
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.code.map(c =>
                      <Button variant="outline" size="sm" asChild>
                        <a href={c.url} target="_blank" rel="noopener noreferrer">
                          <Code className="mr-1 h-4 w-4" />
                          Code {c.label ? `- ${c.label}` : ''}
                        </a>
                      </Button>
                    )}
                    
                    {project.website && (
                      <Button size="sm" asChild>
                        <a href={project.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-4 w-4" />
                          Website
                        </a>
                      </Button>
                    )}
                    
                    {project.video && (
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.video} target="_blank" rel="noopener noreferrer">
                          <Play className="mr-1 h-4 w-4" />
                          Demo Video
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities 
                  to be part of your vision. Let's build something amazing together!
                </p>
                <Button size="lg" asChild>
                  <a href="/contact">Get In Touch</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
