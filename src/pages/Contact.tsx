
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

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
                      Best way to reach me for professional inquiries.
                    </p>
                    <Button asChild>
                      <a href="mailto:minhnhat091101@gmail.com">
                        minhnhat091101@gmail.com
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
                      Available for calls during business hours. You are also welcome to text or call me by WhatsApp.
                    </p>
                    <Button asChild>
                      <a href="tel:+358403229459">
                        +358 403229459
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
                      Tampere, Pirkanmaa, Finland
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Open to remote work and relocation opportunities
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
                          <a href="https://github.com/MinhNhatTRUONG-2001" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" />
                            GitHub - Check out my code
                          </a>
                        </Button>
                        
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href="https://www.linkedin.com/in/minh-nhat-truong-97459b223/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-5 w-5" />
                            LinkedIn - Professional network
                          </a>
                        </Button>
                      </div>
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
