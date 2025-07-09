
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background in Information Technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <CardTitle className="flex items-center mb-2 sm:mb-0">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  Bachelor of Engineering in Information Technology
                </CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  2016 - 2020
                </div>
              </div>
              <p className="text-primary font-medium">University of Technology</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Award className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Major: Software Development</p>
                    <p className="text-muted-foreground">
                      Specialized in software engineering principles, algorithms, data structures, 
                      database systems, and web development technologies.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-3">Key Coursework:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Database Systems',
                      'Software Engineering',
                      'Web Development',
                      'Computer Networks',
                      'System Analysis & Design',
                      'Object-Oriented Programming',
                      'Mobile App Development',
                      'Cloud Computing'
                    ].map((course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full text-center"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
