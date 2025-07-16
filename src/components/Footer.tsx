
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <img src="/my-logo.svg" alt="Logo" className="h-6 w-6" />
            </div>
          </Link>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/MinhNhatTRUONG-2001"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="h-5 w-5"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/minh-nhat-truong-97459b223/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png"
                alt="LinkedIn"
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Portfolio of Nhat Truong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
