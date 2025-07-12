
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Languages } from 'lucide-react';

const languages = [
  {
    language: 'Vietnamese',
    proficiency: 'Native',
    level: 100
  },
  {
    language: 'English',
    proficiency: 'C1',
    level: (5 / 6) * 100
  },
  {
    language: 'Finnish',
    proficiency: 'A1',
    level: (1 / 6) * 100
  },
];

const LanguagesSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Languages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Communication skills across different languages
          </p>
        </div>

        <Card className="max-w-2xl mx-auto animate-fade-in">
          <CardHeader className="text-center">
            <Languages className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle>Language Proficiency</CardTitle>
            <CardDescription>
              Based on CEFR level.{' '}
              <a href='https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions' target='_blank' style={{ textDecoration: 'underline'}}>
                What is CEFR level?
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {languages.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-sm text-muted-foreground">{lang.proficiency}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LanguagesSection;
