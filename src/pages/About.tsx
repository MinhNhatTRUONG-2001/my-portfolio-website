import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const funFacts = [
  'My full name, written in Vietnamese, is Trương Minh Nhật.',
  'The logo of this website is my design, based on the first letters of my name (T, M, N).',
  'Green is my most favorite color, so this is why the theme color this website is green.',
  'My first programming language was Pascal. I learned it first time when I was in grade 8.',
  'The top 3 programming languages I am most confident with are Python, C# and Typescript.',
  'An IDE without a dark mode is not my choice.',
  'In my free time, I love playing video games, listening to music and playing sports.',
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
                NT
              </AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A software engineer, a full-stack developer and a future data scientist/machine learning engineer.
            </p>
          </div>

          {/* Main Description */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Hello! My name is Nhat Truong. I am a young graduated software engineer based in Tampere, Finland.
                    I love working in every aspect of software development: from building robust backend system to
                    building friendly and lovely user interfaces; from managing databases to deploying applications on 
                    cloud platforms.
                  </p>
                  <p>
                    I am a fast and motivated learner. During my university years, I have worked on various projects,
                    including web applications, mobile apps, and even a few desktop applications. Besides projects at school,
                    I also did some side projects to explore new technologies which does not included in my academic studies
                    and improve my skills. Also, one year of work experience has given me a solid foundation in real-world
                    business and software development practices.
                  </p>
                  <p>
                    I will not stop being just a software engineer with a Bachelor degree. Now, I am studying for a Master
                    degree in Data Science and I hope that I will also be a data scientist or AI/machine learning engineer
                    in the future.
                  </p>
                </div>
              </CardContent>
            </Card>
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
        </div>
      </div>
    </Layout>
  );
};

export default About;
