
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-CSA-2023-001',
    link: 'https://aws.amazon.com/certification/'
  },
  {
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2022',
    credentialId: 'GCP-PD-2022-002',
    link: 'https://cloud.google.com/certification'
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2022',
    credentialId: 'AZ-900-2022-003',
    link: 'https://docs.microsoft.com/en-us/learn/certifications/'
  },
  {
    title: 'Certified Scrum Master (CSM)',
    issuer: 'Scrum Alliance',
    date: '2021',
    credentialId: 'CSM-2021-004',
    link: 'https://www.scrumalliance.org/'
  }
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
                  <p className="text-sm text-muted-foreground">
                    Credential ID: {cert.credentialId}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Verify Certificate
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
