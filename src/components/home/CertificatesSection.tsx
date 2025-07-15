
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '5th Nov 2024',
    link: 'https://www.credly.com/badges/314c9865-2f58-42bc-99a0-31997b596d72/public_url'
  },
  {
    title: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '17th Oct 2024',
    link: 'https://www.credly.com/badges/5229cf3e-8e3b-4dfb-962b-ada87b9e4635/public_url'
  },
  {
    title: 'CyberOps Associate',
    issuer: 'Cisco',
    date: '28th Apr 2023',
    link: 'https://www.credly.com/badges/ff49b77c-e5ce-49c3-93d0-8db3ca923617/public_url'
  },
];

const CertificatesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Certificates & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center mb-2">
                      <Award className="mr-2 h-5 w-5 text-primary" />
                      {cert.title}
                    </CardTitle>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button size="sm" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
