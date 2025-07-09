
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Play } from 'lucide-react';

const allProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for scalability and performance.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    youtube: 'https://youtube.com',
    category: 'Web Application'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.',
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    youtube: null,
    category: 'Web Application'
  },
  {
    title: 'Weather Analytics Dashboard',
    description: 'Data visualization dashboard for weather patterns using machine learning predictions and historical data analysis.',
    technologies: ['Python', 'Django', 'Chart.js', 'TensorFlow', 'Redis'],
    github: 'https://github.com',
    demo: null,
    youtube: 'https://youtube.com',
    category: 'Data Science'
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'JWT', 'MongoDB'],
    github: 'https://github.com',
    demo: null,
    youtube: 'https://youtube.com',
    category: 'Mobile Application'
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management platform with advanced search, virtual tours, and agent management system.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS S3'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    youtube: null,
    category: 'Web Application'
  },
  {
    title: 'AI Chatbot System',
    description: 'Intelligent chatbot with natural language processing, sentiment analysis, and multi-platform integration.',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    youtube: 'https://youtube.com',
    category: 'AI/ML'
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
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{project.category}</span>
                  </div>
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
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    
                    {project.youtube && (
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                          <Play className="mr-1 h-4 w-4" />
                          Video
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
