import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const educationData = [
  {
    degree: 'Master of Science in Data Science',
    university: 'Tampere University',
    duration: '2025 - present',
    major: 'AI/Machine Learning',
    courses: ['Deep Learning']
  },
  {
    degree: 'Bachelor of Engineering in Information Technology',
    university: 'Vaasa University of Applied Sciences (VAMK)',
    duration: '2020 - 2024',
    major: 'Software Development',
    minor: 'Network & Telecommunication',
    courses: ['Software Engineering Project', '.NET programming'],
    gpa: '4.39/5.0',
    certificateFileUrl: 'https://drive.google.com/file/d/1G1b5YjGhNI-D0H9Ax9mvbVMMQJyyL5lQ/view'
  },
];

const EducationSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow animate-fade-in"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <CardTitle className="flex items-center mb-2 sm:mb-0">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    {edu.degree}
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {edu.duration}
                  </div>
                </div>
                <p className="text-primary font-medium">{edu.university}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Major: {edu.major}</p>
                    </div>
                  </div>
                  {edu.minor &&
                    <div className="flex items-start space-x-2">
                      <Award className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Minor: {edu.minor}</p>
                      </div>
                    </div>
                  }
                  {edu.courses &&
                    <div className="flex items-start space-x-2">
                      <div>
                        <p className="font-medium">Key courses: {edu.courses.join(', ')}</p>
                      </div>
                    </div>
                  }
                  {edu.gpa &&
                    <div className="flex items-start space-x-2">
                      <div>
                        <p className="font-medium">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                  }
                  {edu.certificateFileUrl &&
                    <Button size="sm" asChild>
                      <a href={edu.certificateFileUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        View Certificate & Transcript of Records
                      </a>
                    </Button>
                  }
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;