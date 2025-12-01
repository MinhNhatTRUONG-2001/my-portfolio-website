
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi! I'm{' '}
              <span className="gradient-text">Nhat Truong</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">
              Software Engineer / Data Engineer / Machine Learning Engineer
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionate software engineer, specializing in full-stack development. I build scalable web, desktop and mobile
              applications and love solving complex technical challenges. I also love exploring the meaning behind data and
              building AI/machine learning models.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://drive.google.com/drive/folders/1xwpcIy-7v788dXCfuXBjL45yEYY48e5P?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download CV/Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="animate-slide-up">
            <Avatar className="w-64 h-64 lg:w-80 lg:h-80 border-4 border-primary/20 shadow-2xl">
              <AvatarImage src="/nhat-sqr.jpg" alt="Nhat Truong" />
              <AvatarFallback className="text-6xl font-bold bg-primary text-primary-foreground">
                NT
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
