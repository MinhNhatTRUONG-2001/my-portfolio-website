
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always interested in new opportunities, collaborations, and conversations 
              about technology. Let's connect and discuss how we can work together!
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-primary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Best way to reach me for professional inquiries
                    </p>
                    <Button asChild>
                      <a href="mailto:john.developer@email.com">
                        john.developer@email.com
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-primary" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Available for calls during business hours
                    </p>
                    <Button variant="outline" asChild>
                      <a href="tel:+1234567890">
                        +1 (234) 567-8900
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-primary" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      San Francisco, CA, USA
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Open to remote work and relocation opportunities
                    </p>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-primary" />
                      Availability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM (PST)
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Response time: Usually within 24 hours
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Social Links & CTA */}
              <div className="space-y-8">
                <Card className="animate-fade-in bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardHeader>
                    <CardTitle>Let's Connect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Whether you're looking to hire a developer, collaborate on a project, 
                      or just want to chat about technology, I'd love to hear from you.
                    </p>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Find me on:</h3>
                      
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" />
                            GitHub - Check out my code
                          </a>
                        </Button>
                        
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-5 w-5" />
                            LinkedIn - Professional network
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-semibold mb-3">What I'm looking for:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Full-time software engineering positions</li>
                        <li>• Freelance web development projects</li>
                        <li>• Open source collaboration opportunities</li>
                        <li>• Technical mentorship and knowledge sharing</li>
                        <li>• Speaking opportunities at tech events</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle>Quick Response</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      For urgent matters or quick questions, email is the fastest way to reach me. 
                      I check my email regularly and aim to respond within a few hours during business days.
                    </p>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm font-medium text-primary">
                        💡 Pro tip: Include your project details, timeline, and budget range 
                        in your first message to get a more detailed response!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg mb-2">Ready to start a conversation?</h3>
                    <p className="text-muted-foreground mb-4">
                      Let's discuss your project and see how I can help bring your ideas to life.
                    </p>
                    <Button size="lg" asChild>
                      <a href="mailto:john.developer@email.com?subject=Project Inquiry">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Message
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
