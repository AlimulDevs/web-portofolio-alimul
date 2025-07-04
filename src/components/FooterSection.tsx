
import { Linkedin, Github, Mail, Terminal } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Nur Alimul Haq
              </span>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-md mx-auto text-lg">
              Full Stack Developer innovating with code & creativity to build the future.
            </p>
            
            <div className="flex justify-center space-x-8 mb-10">
              <a href="https://linkedin.com/in/nuralimulhaq" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/nuralimulhaq" className="text-gray-400 hover:text-gray-300 transition-colors duration-200 transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:contact@nurhaq.dev" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Nur Alimul Haq | Full Stack Developer | Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default FooterSection;
