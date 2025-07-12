
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Code, Coffee, Mountain, Music, Camera, Book } from 'lucide-react';

const hobbies = [
  {
    icon: Code,
    title: 'Open Source Contributions',
    description: 'Contributing to open source projects and building tools for the developer community'
  },
  {
    icon: Mountain,
    title: 'Hiking & Nature',
    description: 'Exploring nature trails and mountains for mental clarity and inspiration'
  },
  {
    icon: Music,
    title: 'Music Production',
    description: 'Creating electronic music and experimenting with sound design'
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Capturing moments and landscapes, especially during travels'
  },
  {
    icon: Coffee,
    title: 'Coffee Brewing',
    description: 'Exploring different brewing methods and coffee origins'
  },
  {
    icon: Book,
    title: 'Reading',
    description: 'Technical books, sci-fi novels, and articles about emerging technologies'
  }
];

const funFacts = [
  'I have debugged code at 3 AM more times than I can count ☕',
  'My first programming language was BASIC on a Windows 95 computer',
  'I can solve a Rubik\'s cube in under 2 minutes',
  'I once built a web scraper that saved my university 200+ hours of manual work',
  'I prefer dark theme in every application (obviously)',
  'My rubber duck debugging collection has 12 different ducks',
  'I have visited 15+ countries and coded from most of them',
  'I maintain a homelab with 3 Raspberry Pis running various services'
];

const About = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20">
              <AvatarImage src="/nhat-sqr.jpg" alt="Nhat Truong" />
              <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">
                JD
              </AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let me tell you my story - from curious student to passionate software engineer
            </p>
          </div>

          {/* Main Story */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">My Journey in Software Development</h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    My passion for technology began during high school when I first encountered programming. 
                    What started as curiosity about how websites work quickly evolved into a deep fascination 
                    with building digital solutions that solve real-world problems.
                  </p>
                  
                  <p>
                    During my Bachelor's in Information Technology with a major in Software Development, 
                    I immersed myself in various programming languages and frameworks. I wasn't just learning 
                    to code – I was learning to think systematically, break down complex problems, and 
                    architect scalable solutions.
                  </p>
                  
                  <p>
                    My professional journey has taken me through diverse projects, from e-commerce platforms 
                    handling thousands of users to AI-powered applications leveraging machine learning. 
                    Each project has taught me something new, whether it's a cutting-edge technology, 
                    a better development practice, or simply a more efficient way to collaborate with teams.
                  </p>
                  
                  <p>
                    What drives me most is the ability to transform ideas into tangible, functional software. 
                    There's something magical about writing code that not only works but also creates value 
                    for users and businesses. This is why I'm passionate about full-stack development – 
                    I enjoy being involved in every aspect of the development process, from database design 
                    to user interface implementation.
                  </p>
                  
                  <p>
                    Beyond coding, I believe in continuous learning and knowledge sharing. I actively 
                    contribute to open source projects, mentor junior developers, and stay updated with 
                    the latest industry trends. The tech industry evolves rapidly, and I see that as an 
                    exciting challenge rather than an obstacle.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hobbies & Interests */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Hobbies & Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                  <CardHeader className="text-center">
                    <hobby.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{hobby.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{hobby.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Fun Facts About Me</h2>
            <Card className="max-w-4xl mx-auto animate-fade-in">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {funFacts.map((fact, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                      <span className="text-primary font-bold text-lg">•</span>
                      <p className="text-sm">{fact}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Philosophy */}
          <div>
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 animate-fade-in">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-6">My Development Philosophy</h2>
                <blockquote className="text-lg italic mb-4">
                  "Clean code is not written by following a set of rules. 
                  Clean code is written by programmers who care about their craft."
                </blockquote>
                <p className="text-muted-foreground">
                  I believe in writing code that is not just functional, but also maintainable, 
                  scalable, and easy to understand. Every line of code is an opportunity to 
                  create something better than what existed before.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
