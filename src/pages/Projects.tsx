
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
    image: 'https://previews.dropbox.com/p/thumb/ACtK4K9SzjFKUN96gu-UcjiVQ-wuJmz-8TwwDKjlW7Na2JGiWnLVX1NLkZee1twBj_YRTgFATO-E7pVz2k22bCMurxMhgNs64XwtJQ5vpJuGyBTgDU0dbw38kw4kdTyVYnSAZaESAbatAXv_6ivMLfH9dZmVSltsW_Lf3HLMwlsE4lqLJ8JHWRuxofAW0m83q25kGnjF3gPw965O09Kt6qZ64yaR3_SVAHCshXRHGKybBrAU5eHEO9GhAdGJEfkNW5U8Isa9y6nJw-hV7OSIO0tNiqoLY_nzfdc9Xj-_oAwzpeulwU7qZ_gC4EITkWPRR5g/p.png'
  },
  {
    title: 'Ekseli Spreadsheet',
    description: 'The project description can be read in this link: https://dev.azure.com/e2000606/SEP2023%20-%20Ekseli%201%20Spreadsheet',
    technologies: ['React', 'TypeScript', 'DevExtreme', 'SPARQL'],
    code: [
      {url: 'https://dev.azure.com/e2000606/_git/SEP2023%20-%20Ekseli%201%20Spreadsheet', label: null},
    ],
    website: null,
    video: 'https://www.youtube.com/watch?v=7fK3-RTNm1g',
    image: 'https://previews.dropbox.com/p/thumb/ACv6eiF0ihFZLANCkW02n8L2s7RgoK8EpLXxwWyCqhuApsezEQPZZbIUbRsQ0RX11dllZRZUdZPYUjF1Pf3x3b2ClZJVLvjRUhx-vO3st2k2rroTUh9rQncoINpz-ryY9VA2nF0jaHpu4qfAz0LD1ucR5D7J6EvCRFT-Kevk55dPED3VqONBTKi6KLDmFPFgM7U7gqYKDvtOWpE4uYVt6xM4s-0KFoyoHWCr0zUK9KofkvhC-1FWrg7iKDaiJP3EhBZJG2an4hS8KB6fQ2oh1BohIKTw2HOJ6UjZ-4rLOAWta9iX4VLH2rykuCHkQczGASwhy61eVflNMRjxnX6ECcxr/p.png'
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
    image: 'https://previews.dropbox.com/p/thumb/ACvgc6SJiE0Cx4_RwaYLfAojkQtJ52-oUmA5nJUl6Timo9LbAXomejCxC03NrJFHinDQI4YJvgjsE4K3kWemVJd4ltVayNVhDe0gLipl09xQ5Z3jmJwJ7MabAZ4Bt0Bd62Ew1h_48v9mJ3b352ZpO9cls8Q17HlLLlDuqmTkbC56pu4QY2t8GTx72ZoESEkKq6BtBxRTNRukFyKd0itmsk1LMhktmKSyfmxaaUPxWIrJzZ75ztI0b6HqwQSsT7jLbxcH8J0urll12NPwFkAcScLzC6PoS4OluYwM7IPTbXGgj889-8qFvf1K0ucmjY94JudvUwRgT8_xHA9mIVaM_Hjj/p.png'
  }
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
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
